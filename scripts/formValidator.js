export class FormValidator {
  constructor(config, formElement) {
    this.formSelector = config.formSelector;
    this.inputSelector = config.inputSelector;
    this.submitButtonSelector = config.submitButtonSelector;
    this.inactiveButtonClass = config.inactiveButtonClass;
    this.inputErrorClass = config.inputErrorClass;
    this.formElement = formElement;
    this.inputList = Array.from(this.formElement.querySelectorAll(this.inputSelector));
    this.buttonElement = this.formElement.querySelector(this.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(`.${inputElement.name}-error`);      
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.textContent = '';
  }
 
  _isValid(inputElement) {
    if (inputElement.validity.valid) {
      this.hideInputError(inputElement)
    } else {
      this._showInputError(inputElement, inputElement.validationMessage)
    }
  }

  hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  toggleButtonState() {
    if (this.hasInvalidInput()) {
      this.buttonElement.classList.add(this.inactiveButtonClass);
      this.buttonElement.setAttribute('disabled', '');
    } else { 
      this.buttonElement.classList.remove(this.inactiveButtonClass);
      this.buttonElement.removeAttribute('disabled');
    }
  }

  _setEventListeners() {
  
    this.toggleButtonState();
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);

        this.toggleButtonState();
      });
    })
  }

  enableValidation() { 
    this.formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

}




