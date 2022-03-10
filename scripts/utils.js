import {wrapper} from './constants.js';

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupOnOverlay);
  wrapper.addEventListener('keydown', closePopupOnEsc);
} 


export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupOnOverlay);
  wrapper.removeEventListener('keydown', closePopupOnEsc);
} 

export function closePopupOnOverlay(evt) {                                
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

export function closePopupOnEsc (evt) {                                  
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}

