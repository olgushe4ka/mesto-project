//Добавление фото

import { openPopup } from '../components/modal.js';
import { myOwnerId, photoPopup } from '../components/constants.js';
import { deleteCard, deleteLike, putLike } from './api.js';

function like(evt, cardId) {
  const toogleLikePromise = evt.target.classList.contains('photo-grid__heart_black') ?
    deleteLike(cardId) :
    putLike(cardId);
  toogleLikePromise.then((res) => {
    if (res.ok) {
      return res.json();
    }
  }).then(card => {
    evt.target.parentElement.querySelector('.photo-grid__counter').textContent = card.likes.length;
    evt.target.classList.toggle('photo-grid__heart_black');
  });
}

function removeParentItem(evt) {
  evt.target.parentElement.remove();
};


export function renderCard(imageName, imageLink, imageLike, imageAlt, hideDeleteButton, imageId, myLikeExists) {
  const photoTemplate = document.querySelector('#photo-grid').content;
  const photoItem = photoTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const photoElement = photoItem.querySelector('.photo-grid__photo');

  photoItem.querySelector('.photo-grid__photo').src = imageLink;
  photoItem.querySelector('.photo-grid__name').textContent = imageName;
  photoItem.querySelector('.photo-grid__counter').textContent = imageLike.length;
  photoItem.querySelector('.photo-grid__photo').alt = imageAlt;

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
      deleteCard(imageId).then(
        (res) => {
          if (res.ok) {
            removeParentItem(event);
          }
        }
      );
    });
  }

  photoElement.addEventListener('click', function () {

    document.querySelector('.popup-photo__photo').src = imageLink;
    document.querySelector('.popup-photo__title').textContent = imageName;

    openPopup(photoPopup);

  });

  return photoItem;
};

export function addCard(card, container, addToTheBeginning) {
  const hideDeleteButton = card.owner._id !== myOwnerId;
  const myLikeExists = card.likes.find(like => like._id === myOwnerId) !== undefined;
  const renderedCard = renderCard(card.name, card.link, card.likes, undefined, hideDeleteButton, card._id, myLikeExists);
  if (addToTheBeginning) {
    container.prepend(renderedCard);
  } else {
    container.append(renderedCard);
  }
}

