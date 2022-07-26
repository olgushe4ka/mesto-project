import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, { formData }) {
    super(popup);
    this._formData = formData;
    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__input');
    this._button = this._form.querySelector('.form__submit');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formData(this._getInputValues());
      this.close();

    })
  }

  close() {
    super.close();
    this._form.reset();
  }

renderLoading(isLoading) {
  if (isLoading) {
       this._button.textContent = "Сохранение...";
  } else {
    this._button.textContent = "Сохранить";
  }
}

}
