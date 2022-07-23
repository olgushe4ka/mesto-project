export class Popup {
  constructor(popup) {
    this._popup = popup;
    this._closebyEsc = this._closebyEsc.bind(this);
  }

  _closebyEsc(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  // _hadldeEscUp = (evt) => {
  //   if (evt.key === 'Escape') {
  //     this.close();
  //   }
  // }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._closebyEsc)
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._closebyEsc)
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
