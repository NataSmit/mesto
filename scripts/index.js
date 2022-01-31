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


function editButtonClick() {
  blockPopup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}


function closeButtonClick() {
  blockPopup.classList.remove('popup_opened');
}

function submitProfileForm (evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileProfession.textContent = jobValue;
  closeButtonClick();
}


profileEditButton.addEventListener('click', editButtonClick);

popupCloseButton.addEventListener('click', closeButtonClick);

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
const cardElement = cardTemplate.cloneNode(true);


function render() {
  initialCards.forEach(renderCards);
}

function renderCards (element) {                                       //Добавление эл-ов на стр. при загрузке
  const cardElement = cardTemplate.cloneNode(true);                        
  cardElement.querySelector('.element__name').textContent = element.name;
  cardElement.querySelector('.element__photo-img').src = element.link;
  cardElement.querySelector('.element__photo-img').alt = element.name;
  cardElement.querySelector('.element__photo').addEventListener('click', function(event){
    popupViewImage.classList.toggle('popup-view-image__opened');
    popupViewImagePhoto.src = element.link;
    popupViewImagePhotoSubtitle.textContent = element.name;
    popupViewImagePhoto.alt = element.name;
  });
  addListeners(cardElement);
  sectionElements.append(cardElement);
}


function addListeners (el) {
  el.querySelector('.element__icon').addEventListener('click', setLike);
  el.querySelector('.element__delete-button').addEventListener('click', deliteCard);
}

function setLike (event) {
  event.target.classList.toggle('element__icon_state_active');
}

function deliteCard (event) {
  event.target.closest('.element').remove();
};


function cardAddButtonClick() {                           //Открыть попап для добавления карточки
  popupAddCard.classList.toggle ('popup_opened');
  popupCardNameInput.value = '';
  popupCardLinkInput.value = '';
};

function cardCloseButtonClick() {
  popupAddCard.classList.toggle('popup_opened')
}


function closeBlockPopupViewImage() {
  popupViewImage.classList.toggle('popup-view-image__opened');
}

function createCard (evt) {                              //Добавление новой карточки
  evt.preventDefault();
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.element__name').textContent = popupCardNameInput.value;
  cardElement.querySelector('.element__photo-img').src = popupCardLinkInput.value;
  cardElement.querySelector('.element__photo-img').alt = popupCardNameInput.value;
  addListeners (cardElement);

  const cardElementName = cardElement.querySelector('.element__name').textContent
  
  cardElement.querySelector('.element__photo').addEventListener('click', function(event){
    popupViewImage.classList.toggle('popup-view-image__opened');
    popupViewImagePhoto.src = event.target.src;
    popupViewImagePhotoSubtitle.textContent = cardElementName;
    popupViewImagePhoto.alt = cardElementName;
  });

  sectionElements.prepend(cardElement);
  cardCloseButtonClick();
}

popupAddCard.addEventListener('submit', createCard);
cardAddButton.addEventListener('click', cardAddButtonClick);
popupCardCloseButton.addEventListener('click', cardCloseButtonClick);
popupViewImageCloseButton.addEventListener('click', closeBlockPopupViewImage);
render();







