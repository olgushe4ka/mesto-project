//Добавление фото

import { openPopup } from '../components/modal.js';
import { photoPopup } from '../components/constants.js';

function like(evt) {
  evt.target.classList.toggle('photo-grid__heart_black');
};

function removeItem(evt) {
  evt.target.parentElement.remove();
};


export function renderCard(imageName, imageLink, imageAlt) {
  const photoTemplate = document.querySelector('#photo-grid').content;
  const photoItem = photoTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const photoElement = photoItem.querySelector('.photo-grid__photo');


  photoItem.querySelector('.photo-grid__photo').src = imageLink;
  photoItem.querySelector('.photo-grid__name').textContent = imageName;
  photoItem.querySelector('.photo-grid__photo').alt = imageAlt;

  photoItem.querySelector('.photo-grid__heart').addEventListener('click', like);

  photoItem.querySelector('.photo-grid__delite-button').addEventListener('click', removeItem);

  photoElement.addEventListener('click', function () {

    document.querySelector('.popup-photo__photo').src = imageLink;
    document.querySelector('.popup-photo__title').textContent = imageName;

    openPopup(photoPopup);

  });

  return photoItem;
};


export function addCard(value, container) {
  const card = renderCard(value.name, value.link);
  container.prepend(card);
}

