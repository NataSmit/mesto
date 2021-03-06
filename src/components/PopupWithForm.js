import Popup from './Popup.js';

export class PopupWithForm extends Popup {
  constructor (popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._submitButton = this._formElement.querySelector('.popup__submit-btn');
  }


  _getInputValues() {                                 //собирает данные всех полей формы
    this._formInputs = this._popupElement.querySelectorAll('.popup__form-input');        
    this._inputList = Array.from(this._formInputs);
    
    this._formValues = {};                           // создаём пустой объект

    this._inputList.forEach(input => {              // добавляем в этот объект значения всех полей
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues;
  }


  close() {
    this._formElement.reset();
    super.close();
  }

  changeButtonText(newText) {
    this._submitButton.textContent = newText;
  }

  setEventListeners() {
    super.setEventListeners();
   
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    })
  }


} 