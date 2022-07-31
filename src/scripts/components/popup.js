export class Popup {
  constructor(popup) {
    this._popup = popup;
  }


  _hadldeEscUp = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._hadldeEscUp)
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._hadldeEscUp)
  }

  setEventListener() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close-icon')) {
        this.close();
      }
    })
  }

}
