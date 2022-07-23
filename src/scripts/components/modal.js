const ESC_CODE = "Escape";

//открытие попапов
export function openPopup(popupElement) {
  document.querySelectorAll('.form__set').forEach((item) => { item.style.display = "block"; });
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

//закрытие попапов
export function closePopup(popupElement) {
  document.querySelectorAll('.form__set').forEach((item) => { item.style.display = "none"; });
  popupElement.classList.remove('popup_opened');

  document.removeEventListener('keydown', closeByEsc);
}

//закрытие попапов от Esc

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
