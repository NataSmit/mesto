export class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);      
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }
 
  _isValid(inputElement) {
    if (inputElement.validity.valid) {
      this.hideInputError(inputElement)
    } else {
      this._showInputError(inputElement, inputElement.validationMessage)
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', '');
    } else { 
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  _setEventListeners() {
  
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);

        this.toggleButtonState();
      });
    })
  }

  enableValidation() { 
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

}




