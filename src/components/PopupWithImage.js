import Popup from './Popup.js';

export class PopupWithImage extends Popup {

  constructor (popupSelector) {
    super(popupSelector);
    this._image = this._popupSelector.querySelector('.popup-view-image__photo-item'),
    this._subtitle = this._popupSelector.querySelector('.popup-view-image__subtitle')
  }
   
  open(evt) {
    super.open();
    this._image.src = evt.target.src;
    this._image.alt = evt.target.alt;
    this._subtitle.textContent = evt.target.alt;
  }
} 