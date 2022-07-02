import '../pages/index.css';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }

];


const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile');
const popups = document.querySelectorAll('.popup');
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



function openPopupProfile() {
  const nameValue = nameProfile.textContent;
  const positionValue = positionProfile.textContent;

  namePopupEdit.value = nameValue;
  positionPopupEdit.value = positionValue;

  openPopup(popupProfile);
}
buttonEditProfile.addEventListener('click', openPopupProfile);

import { openPopup } from './components/modal.js';
import { closePopup } from './components/modal.js';
import { closeByEsc } from './components/modal.js';


//Закрытие попавпов
document.addEventListener('keydown', closeByEsc);



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




//Добавление фото
import { nameInput } from './components/constants.js';
import { linkInput } from './components/constants.js';
import { gridCreateButton } from './components/constants.js';
import { renderCard } from './components/cards.js';
import { addCard } from './components/cards.js';


initialCards.forEach((item) => {
  const cards = document.querySelector('.photo-grid');
  addCard(item, cards);
});


cardForm.addEventListener('submit', function () {
  const cards = document.querySelector('.photo-grid');

  const card = renderCard(nameInput.value, linkInput.value);

  nameInput.value = '';
  linkInput.value = '';

  cards.prepend(card);

  closePopup(popupEdit);
  //При сабмите формы добавления карточки также необходимо деактивировать кнопку сабмита, иначе после добавления карточки и последующего повторного открытия формы - кнопка активна - в результате чего есть возможность сделать сабмит с пустыми невалидными полями
});




// Изменение профайла

const profileSaveButton = document.querySelector('.edit-form__save-button');

// const namePopupEdit = document.querySelector('.edit-form__field_name');
// const positionPopupEdit = document.querySelector('.edit-form__field_position');
// const positionProfile = document.querySelector('.profile__position');
// const nameProfile = document.querySelector('.profile__name');
// const popupProfile = document.querySelector('.popup-profile');

function changeProfile(nameValue, positionValue) {
  nameProfile.textContent = nameValue;
  positionProfile.textContent = positionValue;
}

profileForm.addEventListener('submit', function () {

  changeProfile(namePopupEdit.value, positionPopupEdit.value);

  namePopupEdit.value = '';
  positionPopupEdit.value = '';

  closePopup(popupProfile);
});




//валидация форм
import { enableValidation } from './components/validate.js';

enableValidation({
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  formSelector: '.form',
  formSetClass: '.form__set',
  inactiveButtonClass: '.button_inactive'
});


//закрытие попапов при щелке мимо него
popups.forEach(popup => {
  popup.addEventListener('mousedown', evt => {
    if (evt.target.classList.contains('popup_opened'))
      closePopup(evt.target.closest('.popup'))
  });
});

