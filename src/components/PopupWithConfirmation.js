import Popup from './Popup.js';

export class PopupWithConfirmation extends Popup {
  constructor (popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formElement = this._popupElement.querySelector('.popup__form')
  }

  changeSubmitFormHandler(newSubmitFormHandler) {
    this._submitForm = newSubmitFormHandler
  }

  setEventListeners() {
    super.setEventListeners();
   
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm();
    })
  }
}
