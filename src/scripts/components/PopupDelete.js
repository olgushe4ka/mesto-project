import { Popup } from "./Popup.js";

export class PopupDelete extends Popup {
  constructor(popup) {
    super(popup);
    this._form = this._popup.querySelector(".form");
    this._submitButton = this._form.querySelector(".edit-form__button");
    this._submitButtonText = this._submitButton.textContent;
  }
  setEventListener() {
    super.setEventListener();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }
  confinumDelete(action) {
    this._handleSubmitCallback = action;
  }

  renderDeleting(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Удаление...";
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
}
