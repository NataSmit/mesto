import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { api } from '../components/Api.js';
import {Section} from '../components/Section.js';
import Popup from '../components/Popup.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import {renderCard} from '../utils/utils.js';
import {popupViewImage, popupViewImagePhoto, popupViewImagePhotoSubtitle, wrapper, initialCards, 
  formProfile, formTypeCard, profileEditButton, popupSubmitButton, cardAddButton, nameInput, jobInput,
  popupCardNameInput, popupCardLinkInput, sectionElements, config, avatar, avatarForm} from '../utils/constants.js';

import './index.css';

let userID;

Promise.all([api.getUserData(),api.getInitialCards(userID)])
  .then(([userData, serverCards]) => {              
    userID = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData);

    serverCards.forEach((data) => {
      const card = createCard(data, userID);
      cardList.addItem(card);
    }) 
  })
  .catch((err) => console.log(err))

function createCard(item, userID) {
  const newUserCard = new Card(item, userID, '.card-template', handleCardClick, {handleDeleteClick:
   (id)=> {
   confirmDeletePopup.open();
   confirmDeletePopup.changeSubmitFormHandler(() => {
     api.deleteCard(id)
      .then(res => {
        newUserCard.deliteCard();
        confirmDeletePopup.close();
      })
      .catch((err) => console.log(err))
   })
   }, handleLikeClick:
   (cardTest, id) => {
    if(newUserCard.isLiked()) {
      api.deleteLike(id)
        .then(res => {
          newUserCard.setLikes(res.likes)
        }) 
        .catch((err) => console.log(err)) 
    } else {
      api.addLike(id) 
      .then(res => {
        newUserCard.setLikes(res.likes)
      })
      .catch((err) => console.log(err))
    }
   }
 }
 );
  const card = newUserCard.generateCard();
  return card 
}

function submitProfileForm (info) {  
  profilePopup.changeButtonText('Сохранение...');
  api.editProfile(info)  
    .then(res =>{
      userInfo.setUserInfo(info);              //Редактирование данных профайла
    })  
    .catch((err) => console.log(err))  
    .finally(() => {
      profilePopup.changeButtonText('Сохранить')
    })         
                     
  profilePopup.close()
}

function submitAvatarForm(obj) {
  popupUpdateAvatar.changeButtonText('Сохранение...');
  api.updateAvatar(obj)  
    .then(res =>{
      userInfo.setAvatar(obj);        
    }) 
    .catch((err) => console.log(err))
    .finally(() => {
      popupUpdateAvatar.changeButtonText('Сохранить')
    })      
  popupUpdateAvatar.close();
}

function handleCardClick(name, link) {
  imagePopup.open(name, link);
}


function submitCard(obj) {
  cardPopup.changeButtonText('Сохранение...');
  api.addCard(obj)
    .then(res => {
      cardList.addItem(createCard(res, userID));
    })
    .catch((err) => console.log(err))
    .finally(() => {
      cardPopup.changeButtonText('Создать')
    })
  obj.owner = {};
  obj.owner._id = userID;
  obj.likes = [];
  cardPopup.close();
}


const profileFormValidator = new FormValidator(config, formProfile);
const cardFormValidator = new FormValidator(config, formTypeCard);
const avatarValidator = new FormValidator(config, avatarForm);


profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarValidator.enableValidation();

const userInfo = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__profession', 
                               avatarSelector: '.profile__avatar-img'})

const profilePopup = new PopupWithForm('.popup_type_profile', submitProfileForm)
profilePopup.setEventListeners()

const cardPopup = new PopupWithForm('.popup_tipe_card', submitCard)
cardPopup.setEventListeners()


const imagePopup = new PopupWithImage('.popup-view-image')
imagePopup.setEventListeners()

const confirmDeletePopup = new PopupWithConfirmation('.popup_tipe_delete')
confirmDeletePopup.setEventListeners()

const popupUpdateAvatar = new PopupWithForm('.popup_type_update-avatar', submitAvatarForm)
popupUpdateAvatar.setEventListeners()



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

avatar.addEventListener('click', function(){
  popupUpdateAvatar.open();
  cardFormValidator.resetValidation()
});


const cardList = new Section({
  items: [],
  renderer: (cardItem) => {
    const newUserCard = createCard(cardItem);
    cardList.addItem(newUserCard);
  }
},
 '.elements'

);

cardList.renderItems();





   







