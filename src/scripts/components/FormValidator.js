export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._config.inputSelector)
    );
    this._submitButton = this._form.querySelector(
      this._config.submitButtonSelector
    );
  }

  _showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        this._config
      );
    } else {
      this._hideInputError(formElement, inputElement, this._config);
    }
  };

  _setEventListeners = (formElement) => {
    this._toggleButtonState(this._config);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, this._config);
        this._toggleButtonState(this._config);
      });
    });
  };

  enableValidation = () => {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(
      this._form.querySelectorAll(this._config.formSetClass)
    );

    fieldsetList.forEach((formElement) => {
      this._setEventListeners(formElement, this._config);
    });
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  };
}
