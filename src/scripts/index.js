import '../pages/index.css';

import { cards } from './components/cards.js';
cards;

import { modal } from './components/modal.js';
modal;

import { validation } from './components/validate.js';
validation;


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

//закрытие попапов при щелке мимо него
popups.forEach(popup => {
  popup.addEventListener('mousedown', evt => {
    if (evt.target.classList.contains('.popup_opened'))
      closePopup(evt.target.closest('.popup'))
  });
});


//закрытие попапов при щелке Esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    popups.forEach(function (currentPopup) {
      closePopup(currentPopup);
    });
  }
};

document.addEventListener('keydown', closePopupEsc);


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

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
