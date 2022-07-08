import '../pages/index.css';
import { addCard, renderCard, removeItem } from './components/cards.js';
import { linkInput, nameInput, gridCreateButton, profileSaveButton, avaSaveButton, cardsContainer } from './components/constants.js';
import { closePopup, openPopup } from './components/modal.js';
import { enableValidation } from './components/validate.js';
import { getProfileInfo, patchAvatar, getCards, patchProfileInfo, postCards, deleteCard } from './components/api.js';


const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile');
const popupEdit = document.querySelector('.popup-edit');
const buttonCloseProfile = document.querySelector('.popup__close-icon');
const buttonAddCard = document.querySelector('.profile__plus-button');
const buttonCloseEdit = document.querySelector('.edit-popup__close-icon');
const popupPhotoCloseButton = document.querySelector('.photo-popup__close-icon');
const namePopupEdit = document.querySelector('.edit-form__field_name');
const positionPopupEdit = document.querySelector('.edit-form__field_position');
const positionProfile = document.querySelector('.profile__position');
const nameProfile = document.querySelector('.profile__name');
const photoPopup = document.querySelector('.popup-photo');
const cardForm = document.querySelector('.card-form');
const profileForm = document.querySelector('.profile-form');
const popups = document.querySelectorAll('.popup');
const buttonOpenAvatarEdit = document.querySelector('.profile__avatar-box');
const popupAvatarEdit = document.querySelector('.popup-avatar-edit');
const avatarImage = document.querySelector('.profile__avatar');
const avatarForm = document.querySelector('.avatar-form');
const avatarFormInput = document.querySelector('.avatar-form__field_link');
const avatarCloseIcon = document.querySelector('.popup__close-icon-ava');


//открытие, закрытие попапов
buttonEditProfile.addEventListener('click', function () {
  openPopup(popupProfile);
});


buttonAddCard.addEventListener('click', function () {
  openPopup(popupEdit);
});

buttonOpenAvatarEdit.addEventListener('click', function () {
  openPopup(popupAvatarEdit);
});



buttonCloseProfile.addEventListener('click', function () {
  closePopup(popupProfile);
});

buttonCloseEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});


popupPhotoCloseButton.addEventListener('click', function () {
  closePopup(photoPopup);
});

avatarCloseIcon.addEventListener('click', function () {
  closePopup(popupAvatarEdit);
});


//Добавление фото
getCards().then((res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
})
  .then(initialCards => {
    initialCards.forEach((item) => {
      addCard(item, cardsContainer);
    });
  });



cardForm.addEventListener('submit', function () {

  renderLoading(true, cardForm);

  postCards(nameInput.value, linkInput.value)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(createdCard => {
      addCard(createdCard, cardsContainer, true)
    })
    .finally(() => {
      renderLoading(false, cardForm);
    });

  nameInput.value = '';
  linkInput.value = '';

  closePopup(popupEdit);

  gridCreateButton.disabled = true;
});


// Изменение профайла
getProfileInfo()
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((res) => {
    nameProfile.textContent = res.name;
    positionProfile.textContent = res.about;
    avatarImage.src = res.avatar;

    namePopupEdit.value = res.name;
    positionPopupEdit.value = res.about;
  });

function changeProfile(nameValue, positionValue) {
  nameProfile.textContent = nameValue;
  positionProfile.textContent = positionValue;
}

profileForm.addEventListener('submit', function () {

  renderLoading(true, profileForm);

  changeProfile(namePopupEdit.value, positionPopupEdit.value);
  patchProfileInfo(namePopupEdit.value, positionPopupEdit.value)
    .finally(() => {
      closePopup(popupProfile);
      renderLoading(false, profileForm);
    });

});

//изменение аватара
function changeAvatar(imageValue) {
  avatarImage.src = imageValue;
}

avatarForm.addEventListener('submit', function () {
  renderLoading(true, avatarForm);

  changeAvatar(avatarFormInput.value);
  patchAvatar(avatarFormInput.value)
  .finally(() => {
    closePopup(popupAvatarEdit);
    avatarFormInput.value = '';
     renderLoading(false, avatarForm);
  });

 avaSaveButton.disabled = true;
});


//валидация форм
enableValidation({
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  formSelector: '.form',
  formSetClass: '.form__set',
  inactiveButtonClass: 'button_inactive'
});


//закрытие попапов при щелке мимо него
popups.forEach(popup => {
  popup.addEventListener('mousedown', evt => {
    if (evt.target.classList.contains('popup_opened'))
      closePopup(evt.target.closest('.popup'))
  });
});


function renderLoading(isLoading, place) {

  if (isLoading) {
    place.querySelector('.form__submit').textContent = 'Сохранение...';
  }
  else {
    place.querySelector('.form__submit').textContent = 'Сохранить';
  }
}
