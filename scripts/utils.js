import {wrapper} from './constants.js';

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  
  wrapper.addEventListener('keydown', closePopupOnEsc);
} 


export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  
  wrapper.removeEventListener('keydown', closePopupOnEsc);
} 



export function closePopupOnEsc (evt) {                                  
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}

