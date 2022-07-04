const ESC_CODE = "Escape";

//открытие попапов
export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');

  document.addEventListener('keydown', closeByEsc);
}

//закрытие попапов
export function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');

  document.removeEventListener('keydown', closeByEsc);
}

//закрытие попапов при щелке Esc

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
