//открытие попапов
export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

//закрытие попапов
export function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

//закрытие попапов при щелке Esc

const ESC_CODE = "Escape";

export function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

