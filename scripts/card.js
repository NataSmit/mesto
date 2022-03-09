import {openPopup, closePopupOnOverlay, closePopupOnEsc } from './utils.js';
import {popupViewImage, popupViewImagePhoto, popupViewImagePhotoSubtitle, wrapper} from './constants.js';

export class Card {
  constructor(data, cardSelector) {
    this.name = data.name;
    this.link = data.link;
    this.alt = data.name;
    this._cardSelector = cardSelector;
  }

  getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .cloneNode(true);
     
    return cardElement;
  }

  generateCard() {
    this.element = this.getTemplate();

    this._setEventListeners();

    this.element.querySelector('.element__name').textContent = this.name;
    this.element.querySelector('.element__photo-img').src = this.link;
    this.element.querySelector('.element__photo-img').alt = this.alt;
    
    return this.element;
  }

 
  _setEventListeners() {
    
    this.element.querySelector('.element__icon').addEventListener('click', this._setLike);
    this.element.querySelector('.element__delete-button').addEventListener('click', this._deliteCard);
    this.element.querySelector('.element__photo-img').addEventListener('click', this._openCardFullScreen);
 }
 
 _setLike (event) {
  event.target.classList.toggle('element__icon_state_active');
 }

  _deliteCard (event) {
    event.target.closest('.element').remove();
  };

  _openCardFullScreen (event) {
    openPopup(popupViewImage);
    popupViewImagePhoto.src = event.target.src;
    popupViewImagePhotoSubtitle.textContent = event.target.alt;
    popupViewImagePhoto.alt = event.target.alt;
  }
}