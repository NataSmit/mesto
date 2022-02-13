// Проектная работа 4

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



function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupOnOverlay);
  wrapper.addEventListener('keydown', closePopupOnEsc);
} 

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupOnOverlay);
  wrapper.removeEventListener('keydown', closePopupOnEsc);
} 


function submitProfileForm (evt) {             //Редактирование данных профайла
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileProfession.textContent = jobValue;
  closePopup(blockPopup);
}


profileEditButton.addEventListener('click', function(){
  openPopup(blockPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});

popupCloseButton.addEventListener('click', function(){
  closePopup(blockPopup)
});

formProfile.addEventListener('submit', submitProfileForm); 


// Проектная работа 5


const cardTemplate = document.querySelector('.card-template').content;
const sectionElements = document.querySelector('.elements');
const cardAddButton = document.querySelector ('.profile__add-button');
const popupAddCard = document.querySelector('.popup_tipe_card');
const popupCardCloseButton = document.querySelector('.popup__close-button_type_card');
const popupCardNameInput = document.querySelector('.popup__form-input_type_card-name');
const popupCardLinkInput = document.querySelector('.popup__form-input_type_card-link');
const popupViewImage = document.querySelector('.popup-view-image');
const popupViewImageCloseButton = document.querySelector('.popup-view-image__close-button');
const popupViewImagePhoto = document.querySelector('.popup-view-image__photo-item');
const popupViewImagePhotoSubtitle = document.querySelector('.popup-view-image__subtitle');
const popups = Array.from(document.querySelectorAll('.popup'));
const wrapper = document.querySelector('.wrapper')



function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);                        
  cardElement.querySelector('.element__name').textContent = item.name;
  cardElement.querySelector('.element__photo-img').src = item.link;
  cardElement.querySelector('.element__photo-img').alt = item.name;
  addListeners(cardElement);
  return cardElement;
} 

function renderCard(card, wrap) {                 //Добавление карточки в контейнер
  wrap.prepend(card);
} 


function render() {                                  //Перебор массива карточек с созданием и добавлением на стр   
  initialCards.reverse().forEach(function(el){
    const newCard = createCard(el);
    renderCard(newCard, sectionElements);
  });
}

function addListeners (el) {
  el.querySelector('.element__icon').addEventListener('click', setLike);
  el.querySelector('.element__delete-button').addEventListener('click', deliteCard);
  el.querySelector('.element__photo-img').addEventListener('click', openCardFullScreen);
}

function setLike (event) {
  event.target.classList.toggle('element__icon_state_active');
}

function deliteCard (event) {
  event.target.closest('.element').remove();
};

function openCardFullScreen (event) {
  openPopup(popupViewImage);
  popupViewImagePhoto.src = event.target.src;
  popupViewImagePhotoSubtitle.textContent = event.target.alt;
  popupViewImagePhoto.alt = event.target.alt;
}


function addCard (evt) {
  evt.preventDefault();
  const newObj = {
    name: popupCardNameInput.value,
    link: popupCardLinkInput.value
  };
  const newUserCard = createCard(newObj)
  renderCard(newUserCard, sectionElements);
  closePopup(popupAddCard);
}

function closePopupOnOverlay(evt) {                                // ПР6
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function closePopupOnEsc (evt) {                                   // ПР6
  const popupActive = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupActive);
  }
}


popupAddCard.addEventListener('submit', addCard);

cardAddButton.addEventListener('click', function(){
  openPopup(popupAddCard);
  popupCardNameInput.value = '';
  popupCardLinkInput.value = '';
});

popupCardCloseButton.addEventListener('click', function(){
  closePopup(popupAddCard);
});

popupViewImageCloseButton.addEventListener('click', function(){
  closePopup(popupViewImage);
});

render();





