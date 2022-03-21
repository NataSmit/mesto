import Popup from './Popup.js';

export class PopupWithForm extends Popup {
  constructor (popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formElement = this._popupSelector.querySelector('.popup__form')
  }


  _getInputValues() {                                 //собирает данные всех полей формы
    this._inputList = Array.from(this._popupSelector.querySelectorAll('.popup__form-input'));
   
    this._formValues = {};                           // создаём пустой объект

    this._inputList.forEach(input => {              // добавляем в этот объект значения всех полей
      this._formValues[input.id] = input.value;
    });
    
    return this._formValues;
  }

  close() {
    this._formElement.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    })
  }

} 