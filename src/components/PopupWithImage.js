import Popup from './Popup.js';

export class PopupWithImage extends Popup {

  constructor (popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector('.popup-view-image__photo-item'),
    this._subtitle = this._popupElement.querySelector('.popup-view-image__subtitle')
  }
   
  open(name, link) {
    super.open();
    this._image.src = link;
    this._image.alt = name;
    this._subtitle.textContent = name;
  }
} 