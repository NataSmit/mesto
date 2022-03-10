import {openPopup, closePopupOnOverlay, closePopupOnEsc } from './utils.js';
import {popupViewImage, popupViewImagePhoto, popupViewImagePhotoSubtitle, wrapper} from './constants.js';

export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .cloneNode(true);
     
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector('.element__photo-img').src = this._link;
    this._element.querySelector('.element__photo-img').alt = this._alt;
    
    return this._element;
  }

 
  _setEventListeners() {
    
    this._element.querySelector('.element__icon').addEventListener('click', this._setLike);
    this._element.querySelector('.element__delete-button').addEventListener('click', this._deliteCard);
    this._element.querySelector('.element__photo-img').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
 }
 
 _setLike (event) {
  event.target.classList.toggle('element__icon_state_active');
 }

  _deliteCard (event) {
    event.target.closest('.element').remove();
  };


}