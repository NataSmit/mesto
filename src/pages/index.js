import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import {Section} from '../components/Section.js';
import Popup from '../components/Popup.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {renderCard} from '../utils/utils.js';
import {popupViewImage, popupViewImagePhoto, popupViewImagePhotoSubtitle, wrapper, initialCards, 
  formProfile, formTypeCard, profileEditButton, popupSubmitButton, cardAddButton, nameInput, jobInput,
  popupCardNameInput, popupCardLinkInput, sectionElements, config} from '../utils/constants.js';

import './index.css';

function createCard(item) {
  const newUserCard = new Card(item, '.card-template', handleCardClick);
  const card = newUserCard.generateCard();
  return card
}

function submitProfileForm (info) {             //Редактирование данных профайла
  userInfo.setUserInfo(info);
  profilePopup.close()
}


function submitCard(obj) {
  cardList.addItem(createCard(obj))
  cardPopup.close();
}

function handleCardClick(name, link) {
  imagePopup.open(name, link);
}

const profileFormValidator = new FormValidator(config, formProfile)
const cardFormValidator = new FormValidator(config, formTypeCard);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

const userInfo = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__profession'})

const profilePopup = new PopupWithForm('.popup_type_profile', submitProfileForm)
profilePopup.setEventListeners()

const cardPopup = new PopupWithForm('.popup_tipe_card', submitCard)
cardPopup.setEventListeners()

const imagePopup = new PopupWithImage('.popup-view-image')
imagePopup.setEventListeners()


profileEditButton.addEventListener('click', function(){
  profilePopup.open();
  profileFormValidator.resetValidation();
  const {name, about} = userInfo.getUserInfo()
  nameInput.value = name;
  jobInput.value = about;
});


cardAddButton.addEventListener('click', function(){
  cardPopup.open();
  cardFormValidator.resetValidation()
});


const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const newUserCard = createCard(cardItem);
    cardList.addItem(newUserCard);
  }
},
 '.elements'

);

cardList.renderItems();







