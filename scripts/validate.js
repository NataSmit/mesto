/*function showInputError(config, formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
}

function hideInputError(config, formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

function isValid(formElement, inputElement) {
  if (inputElement.validity.valid) {
    hideInputError(config, formElement, inputElement)
  } else {
    showInputError(config, formElement, inputElement, inputElement.validationMessage)
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState(config, inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', '');
  } else { 
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}


function setEventListeners(config, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(config, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);

      toggleButtonState(config, inputList, buttonElement);
    });
  })
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      
    });
    setEventListeners(config, formElement);
  })
}


enableValidation(config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
});*/



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
    console.log(`.${inputElement.name}`)
    const errorElement = this.formElement.querySelector(`.${inputElement.name}-error`);
    
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMessage;
    console.log(inputElement)
  }

  hideInputError(inputElement) {
    console.log(this.formElement)
    const errorElement = this.formElement.querySelector(`.${inputElement.name}-error`);
    
    console.log(`.${inputElement.name}-error`)
    console.log(errorElement)
    console.log(inputElement)
    
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
    if (this.hasInvalidInput) {
  
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




