const profileEditButton = document.querySelector('.profile__edit-button');

const popupSubmitButton = document.querySelector('.popup__submit-btn');

const popupCloseButton = document.querySelector('.popup__close-button');

const blockPopup = document.querySelector('.popup');

const profileName = document.querySelector('.profile__name');

const profileProfession = document.querySelector('.profile__profession');

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__form-input_type_name');

let jobInput = document.querySelector('.popup__form-input_type_activity');


function editButtonClick() {
  blockPopup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

function closeButtonClick() {
  blockPopup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileProfession.textContent = jobValue;
  closeButtonClick();
}


profileEditButton.addEventListener('click', editButtonClick);

popupCloseButton.addEventListener('click', closeButtonClick);

formElement.addEventListener('submit', formSubmitHandler); 


// Проектная работа 5

/*const cardAddButton = document.querySelector ('.profile__add-button');
const popupAddCard = document.querySelector('.popup_tipe_card');
const popupCardCloseButton = document.querySelector('.popup__close-button_type_card');
const cardLikeButton = document.querySelector('.element__icon')

function cardAddButtonClick() {
  popupAddCard.classList.toggle ('popup_opened');
};

function cardCloseButtonClick() {
  popupAddCard.classList.toggle('popup_opened')
}

function cardLikeButtonClick() {
  cardLikeButton.classList.toggle('element__icon_state_active')
}
cardAddButton.addEventListener('click', cardAddButtonClick);
popupCardCloseButton.addEventListener('click', cardCloseButtonClick);
cardLikeButton.addEventListener('click', cardLikeButtonClick);*/



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


const cardTemplate = document.querySelector('.card-template').content;
const sectionElements = document.querySelector('.elements');


function render() {
  initialCards.forEach(renderCards);
}


function renderCards (element) {
  const cardElement = cardTemplate.cloneNode(true);
  sectionElements.append(cardElement);
  cardTemplate.querySelector('.element__name').textContent = element.name
  cardTemplate.querySelector('.element__photo-img').src = element.link
}

render();







