import '../pages/index.css';
import { addCard } from './components/cards.js';
import { linkInput, nameInput, gridCreateButton, profileSaveButton, avaSaveButton, cardsContainer } from './components/constants.js';
import { closePopup, openPopup } from './components/modal.js';
import { enableValidation } from './components/validate.js';
import { Api } from './components/api.js';
import { Popup } from './components/popup.js';
import { PopupWithImage } from './components/PopupWithImage';
import { PopupWithForm } from './components/PopupWithForm.js';

window.myOwnerId = undefined;

const popupProfile = document.querySelector('.popup-profile');
const buttonEditProfile = document.querySelector('.profile__edit-button');

export const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-13',
  headers: {
    'authorization': 'cec4068b-d318-4572-975e-c977f41c2ea2',
    'Content-Type': 'application/json'
  }
});

const popupwithForm = new PopupWithForm(popupProfile, {formData: () =>{} }

)

popupwithForm.setEventListener();
buttonEditProfile.addEventListener('click', () => {
  popupwithForm.open();
})



// Promise.all([api.getProfileInfo(), api.getCards()])
//   .then(([profileInfoResponse, cardsResponse]) => {
//     return Promise.all([api.checkResponse(profileInfoResponse), api.checkResponse(cardsResponse)]);
//   })
//   .then(([profileInfo, cards]) => {
//     myOwnerId = profileInfo._id;

//     nameProfile.textContent = profileInfo.name;
//     positionProfile.textContent = profileInfo.about;
//     avatarImage.src = profileInfo.avatar;
//     namePopupEdit.value = profileInfo.name;
//     positionPopupEdit.value = profileInfo.about;

//     cards.forEach((item) => {
//       addCard(item, cardsContainer);
//     })
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// const popupEdit = document.querySelector('.popup-edit');
// const buttonCloseProfile = document.querySelector('.popup__close-icon');
// const buttonAddCard = document.querySelector('.profile__plus-button');
// const buttonCloseEdit = document.querySelector('.edit-popup__close-icon');
// const popupPhotoCloseButton = document.querySelector('.photo-popup__close-icon');
// const namePopupEdit = document.querySelector('.edit-form__field_name');
// const positionPopupEdit = document.querySelector('.edit-form__field_position');
// const positionProfile = document.querySelector('.profile__position');
// const nameProfile = document.querySelector('.profile__name');
// const photoPopup = document.querySelector('.popup-photo');
// const cardForm = document.querySelector('.card-form');
// const profileForm = document.querySelector('.profile-form');
// const popups = document.querySelectorAll('.popup');
// const buttonOpenAvatarEdit = document.querySelector('.profile__avatar-box');
// const popupAvatarEdit = document.querySelector('.popup-avatar-edit');
// const avatarImage = document.querySelector('.profile__avatar');
// const avatarForm = document.querySelector('.avatar-form');
// const avatarFormInput = document.querySelector('.avatar-form__field_link');
// const avatarCloseIcon = document.querySelector('.popup__close-icon-ava');


// //открытие, закрытие попапов
// buttonEditProfile.addEventListener('click', function () {
//   namePopupEdit.value = nameProfile.textContent;
//   positionPopupEdit.value = positionProfile.textContent;
//   openPopup(popupProfile);
// });


// buttonAddCard.addEventListener('click', function () {
//   openPopup(popupEdit);
// });

// buttonOpenAvatarEdit.addEventListener('click', function () {
//   openPopup(popupAvatarEdit);
// });

// buttonCloseProfile.addEventListener('click', function () {
//   closePopup(popupProfile);
// });

// buttonCloseEdit.addEventListener('click', function () {
//   closePopup(popupEdit);
// });


// popupPhotoCloseButton.addEventListener('click', function () {
//   closePopup(photoPopup);
// });

// avatarCloseIcon.addEventListener('click', function () {
//   closePopup(popupAvatarEdit);
// });


// //Добавление фото
// cardForm.addEventListener('submit', function () {

//   renderLoading(true, cardForm);

//   api.postCards(nameInput.value, linkInput.value)
//     .then(api.checkResponse)
//     .then(createdCard => {
//       addCard(createdCard, cardsContainer, true);
//       closePopup(popupEdit);

//       nameInput.value = '';
//       linkInput.value = '';

//       gridCreateButton.classList.add('button_inactive');
//       gridCreateButton.disabled = true;
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       renderLoading(false, cardForm);

//     });
// });


// // Изменение профайла
// function changeProfile(nameValue, positionValue) {
//   nameProfile.textContent = nameValue;
//   positionProfile.textContent = positionValue;
// }

// profileForm.addEventListener('submit', function () {

//   renderLoading(true, profileForm);

//   api.patchProfileInfo(namePopupEdit.value, positionPopupEdit.value)
//     .then(api.checkResponse)
//     .then(() => {
//       changeProfile(namePopupEdit.value, positionPopupEdit.value);
//       closePopup(popupProfile);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       renderLoading(false, profileForm);
//     });
// });

// //изменение аватара
// function changeAvatar(imageValue) {
//   avatarImage.src = imageValue;
// }

// avatarForm.addEventListener('submit', function () {
//   renderLoading(true, avatarForm);

//   changeAvatar(avatarFormInput.value);
//   api.patchAvatar(avatarFormInput.value)
//     .then(() => { closePopup(popupAvatarEdit); })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       avatarFormInput.value = '';
//       renderLoading(false, avatarForm);
//     });

//   avaSaveButton.classList.add('button_inactive');
//   avaSaveButton.disabled = true;
// });


// //валидация форм
// enableValidation({
//   inputErrorClass: 'form__input_type_error',
//   errorClass: 'form__input-error_active',
//   inputSelector: '.form__input',
//   submitButtonSelector: '.form__submit',
//   formSelector: '.form',
//   formSetClass: '.form__set',
//   inactiveButtonClass: 'button_inactive'
// });


// //закрытие попапов при щелке мимо него
// popups.forEach(popup => {
//   popup.addEventListener('mousedown', evt => {
//     if (evt.target.classList.contains('popup_opened'))
//       closePopup(evt.target.closest('.popup'))
//   });
// });


// function renderLoading(isLoading, place) {
//   if (isLoading) {
//     place.querySelector('.form__submit').textContent = 'Сохранение...';
//   }
//   else {
//     place.querySelector('.form__submit').textContent = 'Сохранить';
//   }
// }
