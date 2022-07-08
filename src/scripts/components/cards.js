//Добавление фото

import { openPopup } from '../components/modal.js';
import { myOwnerId, photoPopup } from '../components/constants.js';
import { deleteCard } from './api.js';

function like(evt) {
  evt.target.classList.toggle('photo-grid__heart_black');
};

function removeParentItem(evt) {
  evt.target.parentElement.remove();
};


export function renderCard(imageName, imageLink, imageLike, imageAlt, hideDeleteButton, imageId) {
  const photoTemplate = document.querySelector('#photo-grid').content;
  const photoItem = photoTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const photoElement = photoItem.querySelector('.photo-grid__photo');

  photoItem.querySelector('.photo-grid__photo').src = imageLink;
  photoItem.querySelector('.photo-grid__name').textContent = imageName;
  photoItem.querySelector('.photo-grid__counter').textContent = imageLike.length;
  photoItem.querySelector('.photo-grid__photo').alt = imageAlt;

  photoItem.querySelector('.photo-grid__heart').addEventListener('click', like);
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
  const renderedCard = renderCard(card.name, card.link, card.likes, undefined, hideDeleteButton, card._id);
  if (addToTheBeginning) {
    container.prepend(renderedCard);
  } else {
    container.append(renderedCard);
  }
}

