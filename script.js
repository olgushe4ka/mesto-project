let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-icon');

function openPopup() {
  popup.style.display = "flex";
}

editButton.addEventListener('click', openPopup);


function closePopup() {
  popup.style.display = "none";
}

popupCloseButton.addEventListener('click', closePopup);
