import { FormValidator } from './FormValidator123.js';
import { Card } from './Card123.js';
import {openPopup, closePopupOnOverlay, closePopupOnEsc, closePopup } from './utils.js';
import {popupViewImage, popupViewImagePhoto, popupViewImagePhotoSubtitle, wrapper} from './constants.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  
]; 

const profileEditButton = document.querySelector('.profile__edit-button');

const popupSubmitButton = document.querySelector('.popup__submit-btn');

const popupCloseButton = document.querySelector('.popup__close-button');

const blockPopup = document.querySelector('.popup_type_profile');

const profileName = document.querySelector('.profile__name');

const profileProfession = document.querySelector('.profile__profession');

const formProfile = document.querySelector('.popup__form_type_profile');

const nameInput = document.querySelector('.popup__form-input_type_name');

const jobInput = document.querySelector('.popup__form-input_type_activity');

const cardTemplate = document.querySelector('.card-template').content;
const sectionElements = document.querySelector('.elements');
const cardAddButton = document.querySelector ('.profile__add-button');
const popupAddCard = document.querySelector('.popup_tipe_card');
const popupCardCloseButton = document.querySelector('.popup__close-button_type_card');
const popupCardNameInput = document.querySelector('.popup__form-input_type_card-name');
const popupCardLinkInput = document.querySelector('.popup__form-input_type_card-link');
const popupViewImageCloseButton = document.querySelector('.popup-view-image__close-button');
const formTypeCard = document.querySelector('.popup__form_tipe_card');
const popups = Array.from(document.querySelectorAll('.popup'));

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
}

const profileFormValidator = new FormValidator(config, formProfile)
const cardFormValidator = new FormValidator(config, formTypeCard);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();


function handleCardClick(name, link) {
  popupViewImagePhoto.src = link;
  popupViewImagePhotoSubtitle.textContent = name;
  popupViewImagePhoto.alt = name;
  openPopup(popupViewImage);
}


function submitProfileForm (evt) {             //Редактирование данных профайла
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileProfession.textContent = jobValue;
  closePopup(blockPopup);
}

function createCard(item) {
  const newUserCard = new Card(item, '.card-template', handleCardClick);
  const card = newUserCard.generateCard();
  return card
}

function addCard (evt) {
  evt.preventDefault();
  const newObj = {
    name: popupCardNameInput.value,
    link: popupCardLinkInput.value,
  };
  const newCard = createCard(newObj)
  renderCard(newCard, sectionElements);
  closePopup(popupAddCard);
}

profileEditButton.addEventListener('click', function(){
  openPopup(blockPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});

popupCloseButton.addEventListener('click', function(){
  closePopup(blockPopup);
  const inputElements = blockPopup.querySelectorAll('.popup__form-input'); // Очистка ошибок
  inputElements.forEach((inputElement) =>{
    profileFormValidator.hideInputError(inputElement);
  })
});

formProfile.addEventListener('submit', submitProfileForm); 


popupAddCard.addEventListener('submit', addCard);

cardAddButton.addEventListener('click', function(){
  openPopup(popupAddCard);
  formTypeCard.reset();
  cardFormValidator.toggleButtonState()
});

popupCardCloseButton.addEventListener('click', function(){
  closePopup(popupAddCard);
  const inputElements = popupAddCard.querySelectorAll('.popup__form-input'); // Очистка ошибок
  inputElements.forEach((inputElement) =>{
    cardFormValidator.hideInputError(inputElement);
  })
  
});

popupViewImageCloseButton.addEventListener('click', function(){
  closePopup(popupViewImage);
});


function renderCard(card, wrap) {                 //Добавление карточки в контейнер
  wrap.prepend(card);
} 



function render() {                                    //Перебор массива карточек с созданием и добавлением на стр   
  initialCards.reverse().forEach((item) => {
    const cardElement = createCard(item);
    renderCard(cardElement, sectionElements);
  }); 
}


render();





