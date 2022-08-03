import "../pages/index.css";
import {
  cardsContainer,
  validatorConfig,
  popupSubmitDelete,
  buttonEditProfile,
  popupProfile,
  popupEdit,
  buttonAddCard,
  namePopupEdit,
  positionPopupEdit,
  positionProfile,
  nameProfile,
  photoPopup,
  buttonOpenAvatarEdit,
  popupAvatarEdit,
  avatarImage,
} from "./components/constants.js";
import { Api } from "./components/api.js";
import { Section } from "./components/Section";
import { PopupWithForm } from "./components/PopupWithForm";
import UserInfo from "./components/UserInfo";
import { FormValidator } from "./components/FormValidator";
import { PopupDelete } from "./components/PopupDelete";
import Card from "./components/card";
import { PopupWithImage } from "./components/PopupWithImage";

window.myOwnerId = undefined;

// Создание класса Api
export const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-13",
  headers: {
    authorization: "cec4068b-d318-4572-975e-c977f41c2ea2",
    "Content-Type": "application/json",
  },
});

// Получение данных из Api
Promise.all([api.getProfileInfo(), api.getCards()])
  .then(([profileInfo, cards]) => {
    myOwnerId = profileInfo._id;

    userInfo.setUserInfo(profileInfo);
    userInfo.setAvatar(profileInfo);

    sectionCard.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

// Создание класса UserInfo
const userInfo = new UserInfo(nameProfile, positionProfile, avatarImage);

// Открытие и закрытие форм - ООП
//Попап профайла
const popupWithFormProfile = new PopupWithForm(popupProfile, {
  formData: (data) => {
    popupWithFormProfile.renderLoading(true);
    api
      .patchProfileInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupWithFormProfile.close();
      })
      .finally(() => {
        popupWithFormProfile.renderLoading(false);
      });
  },
});

popupWithFormProfile.setEventListener();

buttonEditProfile.addEventListener("click", () => {
  const getUserinfo = userInfo.getUserInfo();
  namePopupEdit.value = getUserinfo.name;
  positionPopupEdit.value = getUserinfo.about;

  popupWithFormProfile.open();
});

//Попап аватара
const popupWithFormAvatar = new PopupWithForm(popupAvatarEdit, {
  formData: (data) => {
    popupWithFormProfile.renderLoading(true);
    api
      .patchAvatar(data)
      .then(() => {
        userInfo.setAvatar(data);
        popupWithFormAvatar.close()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithFormAvatar.renderLoading(false);
      });
  },
});

popupWithFormAvatar.setEventListener();

buttonOpenAvatarEdit.addEventListener("click", () => {
  popupWithFormAvatar.open();
});

//Попап фотографий
const popupWithFormCard = new PopupWithForm(popupEdit, {
  formData: (data) => {
    popupWithFormCard.renderLoading(true);
    api
      .postCards(data)
      .then((res) => {
        const cardItem = createCard(res);
        sectionCard.addItem(cardItem);
        popupWithFormCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithFormCard.renderLoading(false);
      });
  },
});

popupWithFormCard.setEventListener();

buttonAddCard.addEventListener("click", () => {
  popupWithFormCard.open();
});

//  Добавление фото
const sectionCard = new Section(
  {
    renderer: (item) => {
      const cardItem = createCard(item);
      sectionCard.addItem(cardItem, "after");
    },
  },
  cardsContainer
);
function createCard(data) {
  const card = new Card(data, "#photo-grid", handleCardClick, myOwnerId, {
    handleDeleteClick: () => {
      popupDelete.open();
      popupDelete.confinumDelete(() => {
        popupDelete.renderDeleting(true);
        api
          .deleteCard(data._id)
          .then(() => {
            card.deleteCard();
            popupDelete.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            popupDelete.renderDeleting(false);
          });
      });
    },
    addLike: () => {
      api
        .putLike(data._id)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    removeLike: () => {
      api
        .deleteLike(data._id)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  const cardElement = card.generate();
  return cardElement;
}

const popupDelete = new PopupDelete(popupSubmitDelete);
popupDelete.setEventListener();

const popupZoomPhoto = new PopupWithImage(photoPopup);
function handleCardClick(name, link) {
  popupZoomPhoto.open(name, link);
  popupZoomPhoto.setEventListener();
}

// Валидация форм
const validatorProfile = new FormValidator(validatorConfig, popupWithFormProfile.form);
validatorProfile.enableValidation();

const validatorCard = new FormValidator(validatorConfig, popupWithFormCard.form);
validatorCard.enableValidation();

const validatorAvatar = new FormValidator(validatorConfig, popupWithFormAvatar.form);
validatorAvatar.enableValidation();
