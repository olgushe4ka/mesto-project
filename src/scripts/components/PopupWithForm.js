import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, { formData }) {
    super(popup);
    this._formData = formData;
    this.form = this._popup.querySelector(".form");
    this._inputList = this.form.querySelectorAll(".form__input");
    this._button = this.form.querySelector(".edit-form__button");
    }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }


  setEventListener() {
    super.setEventListener();
    this.form.addEventListener("submit", (evt) => {
     evt.preventDefault();
      this._formData(this._getInputValues());
      this.close();
    });
  }


  close() {
    super.close();
    this.form.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = "Сохранение...";
    } else {
      this._button.textContent = "Сохранить";
    }
  }
}
