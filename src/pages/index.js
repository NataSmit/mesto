import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { api } from '../components/Api.js';
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

let userID

api.getUserData()
 .then(res => {
   
  userInfo.setUserInfo(res);
  userID = res._id
  
 })

api.getInitialCards()
  .then(serverCards => {
    serverCards.forEach(data => {
      const card = createCard(data, userID)
      cardList.addItem(card)
    })
    
  })

function createCard(item, userID) {
  const newUserCard = new Card(item, userID, '.card-template', handleCardClick, openDeleteCardPopup);
  const card = newUserCard.generateCard();
  return card
}

function submitProfileForm (info) {  
  api.editProfile(info)  
    .then(res =>{
      userInfo.setUserInfo(info);        //Редактирование данных профайла
    })       
                     
  profilePopup.close()
}


function handleCardClick(name, link) {
  imagePopup.open(name, link);
}

function openDeleteCardPopup(id) {
  confirmDeletePopup.open();
  confirmDeletePopup.changeSubmitFormHandler(() => {
    api.deleteCard(id)
      .then(res => {
        
        confirmDeletePopup.close();
      })
  })
  
}

function submitCard(obj) {
  api.addCard(obj)
    .then(res => {
      cardList.addItem(createCard(obj))
    })
  
  cardPopup.close();
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

const confirmDeletePopup = new PopupWithForm('.popup_tipe_delete')
confirmDeletePopup.setEventListeners()





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
  items: /*initialCards*/[],
  renderer: (cardItem) => {
    const newUserCard = createCard(cardItem);
    cardList.addItem(newUserCard);
  }
},
 '.elements'

);

cardList.renderItems();





   







