const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile');
const popupEdit = document.querySelector('.popup-edit');
const buttonCloseProfile = document.querySelector('.popup__close-icon');
const likeButton = document.querySelector('.photo-grid__heart');
const photoGrid = document.querySelector('.photo-grid');
const buttonAddCard = document.querySelector('.profile__plus-button');
const gridCreateButton = document.querySelector('.edit-form__create-button');
const buttonCloseEdit = document.querySelector('.edit-popup__close-icon');
const ProfileSaveButton = document.querySelector('.edit-form__save-button');
const photoPopup = document.querySelector('.popup-photo');
const popupPhotoCloseButton = document.querySelector('.photo-popup__close-icon');
const nameInput = document.querySelector('.edit-form__field_title');
const linkInput = document.querySelector('.edit-form__field_link');
const namePopupEdit = document.querySelector('.edit-form__field_name');
const positionPopupEdit = document.querySelector('.edit-form__field_position');
const positionProfile = document.querySelector('.profile__position');
const nameProfile = document.querySelector('.profile__name');

function openPopupProfile() {
  const nameValue = nameProfile.textContent;
  const positionValue = positionProfile.textContent;

  namePopupEdit.value = nameValue;
  positionPopupEdit.value = positionValue;

  openPopup(popupProfile);
}
buttonEditProfile.addEventListener('click', openPopupProfile);


//открытие попапов
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

//закрытие попапов
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

buttonAddCard.addEventListener('click', function () {
  openPopup(popupEdit);
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


// Изменение профайла
function changeProfile(nameValue, positionValue) {
  nameProfile.textContent = nameValue;
  positionProfile.textContent = positionValue;
}

ProfileSaveButton.addEventListener('click', function () {

  changeProfile(namePopupEdit.value, positionPopupEdit.value);

  namePopupEdit.value = '';
  positionPopupEdit.value = '';

  closePopup(popupProfile);
});


//Добавление фото
function renderCard(imageName, imageLink) {
  const photoTemplate = document.querySelector('#photo-grid').content;
  const photoItem = photoTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const photoElement = photoItem.querySelector('.photo-grid__photo');


  photoItem.querySelector('.photo-grid__photo').src = imageLink;
  photoItem.querySelector('.photo-grid__name').textContent = imageName;

  photoItem.querySelector('.photo-grid__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__heart_black');
  });

  photoItem.querySelector('.photo-grid__delite-button').addEventListener('click', function () {
    photoItem.remove();
  });


  photoElement.addEventListener('click', function () {

    document.querySelector('.popup-photo__photo').src = imageLink;
    document.querySelector('.popup-photo__title').textContent = imageName;

    openPopup(photoPopup);

  });

  return photoItem;
};


function addCard(value, container) {
  const card = renderCard(value.name, value.link);
  container.prepend(card);
}


initialCards.forEach((item) => {
  const cards = document.querySelector('.photo-grid');
  addCard(item, cards);
});


gridCreateButton.addEventListener('click', function () {
  const cards = document.querySelector('.photo-grid');

  const card = renderCard(nameInput.value, linkInput.value);

  nameInput.value = '';
  linkInput.value = '';

  cards.prepend(card);

  closePopup(popupEdit);
});

