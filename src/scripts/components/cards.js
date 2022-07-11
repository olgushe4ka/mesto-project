//Добавление фото

import { openPopup } from '../components/modal.js';
import { photoGridTemplate, photoPopup, popupPhotoInput, popupTitleInput } from '../components/constants.js';
import { deleteCard, deleteLike, putLike, checkResponse } from './api.js';

function like(evt, cardId) {
  const toogleLikePromise = evt.target.classList.contains('photo-grid__heart_black') ?
    deleteLike(cardId) :
    putLike(cardId);
  toogleLikePromise
    .then(checkResponse)
    .then(card => {
      evt.target.parentElement.querySelector('.photo-grid__counter').textContent = card.likes.length;
      evt.target.classList.toggle('photo-grid__heart_black')
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeParentItem(evt) {
  evt.target.parentElement.remove();
};


export function renderCard(imageName, imageLink, imageLike, hideDeleteButton, imageId, myLikeExists) {
  const photoTemplate = photoGridTemplate.content;
  const photoItem = photoTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const photoElement = photoItem.querySelector('.photo-grid__photo');

  photoItem.querySelector('.photo-grid__photo').src = imageLink;
  photoItem.querySelector('.photo-grid__name').textContent = imageName;
  photoItem.querySelector('.photo-grid__counter').textContent = imageLike.length;
  photoItem.querySelector('.photo-grid__photo').alt = imageName;

  if (myLikeExists) {
    photoItem.querySelector('.photo-grid__heart').classList.add('photo-grid__heart_black');
  }

  photoItem.querySelector('.photo-grid__heart').addEventListener('click', (evt) => {
    like(evt, imageId);
  });

  if (hideDeleteButton) {
    photoItem.querySelector('.photo-grid__delite-button').remove();
  } else {
    photoItem.querySelector('.photo-grid__delite-button').addEventListener('click', (event) => {
      deleteCard(imageId)
        .then(checkResponse)
        .then(removeParentItem(event))
        .catch((err) => {
          console.log(err)
        });
    })
  }

  photoElement.addEventListener('click', function () {

    popupPhotoInput.src = imageLink;
    popupTitleInput.textContent = imageName;
    popupPhotoInput.alt = imageName;

    openPopup(photoPopup);

  });

  return photoItem;
};


export function addCard(card, container, addToTheBeginning) {
  const hideDeleteButton = card.owner._id !== myOwnerId;
  const myLikeExists = card.likes.find(like => like._id === myOwnerId) !== undefined;
  const renderedCard = renderCard(card.name, card.link, card.likes, hideDeleteButton, card._id, myLikeExists);
  if (addToTheBeginning) {
    container.prepend(renderedCard);
  } else {
    container.append(renderedCard);
  }
}

