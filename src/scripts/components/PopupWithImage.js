import { Popup } from "./Popup";
export  class PopupWithImage extends Popup {
    constructor (popup) {
        super(popup);
        this._image = this._popup.querySelector('.popup-photo__photo');
        this._signature = this._popup.querySelector('.popup-photo__title');
    }
open(name, link) {
    this._image.src = link;
    this._signature.textContent = name;
    super.open();
}
}
