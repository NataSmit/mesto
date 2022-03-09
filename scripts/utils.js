import {wrapper} from './constants.js';

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupOnOverlay);
  wrapper.addEventListener('keydown', closePopupOnEsc);
} 

export function closePopupOnOverlay(evt) {                                
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

export function closePopupOnEsc (evt) {                                  
  const popupActive = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupActive);
  }
}