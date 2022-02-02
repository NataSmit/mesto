
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

/*function createCard (evt) {                              //Добавление новой карточки
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
}*/


popupAddCard.addEventListener('submit', createCard);
cardAddButton.addEventListener('click', cardAddButtonClick);
popupCardCloseButton.addEventListener('click', cardCloseButtonClick);
popupViewImageCloseButton.addEventListener('click', closeBlockPopupViewImage);
render();


////////////////////////////////////////////////////////////////////////////////

function render() {
  initialCards.forEach(function(){
    renderCard(newCard, sectionElements);
  });
}


/*function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);                        
  cardElement.querySelector('.element__name').textContent = item.name;
  cardElement.querySelector('.element__photo-img').src = item.link;
  cardElement.querySelector('.element__photo-img').alt = item.name;

  cardElement.querySelector('.element__photo').addEventListener('click', function(event) {
    openPopup(popupViewImage);
    popupViewImagePhoto.src = item.link;
    popupViewImagePhotoSubtitle.textContent = item.name;
    popupViewImagePhoto.alt = item.name;
  });

  addListeners(cardElement);

  return cardElement;
} 

function renderCard(card, wrap) {
  wrap.prepend(card);
} 

const newCard = createCard(item);*/

function addCard(name, link) {
  name.textContent = popupCardNameInput.value;
  link.src = popupCardLinkInput.value;
  name.alt = popupCardNameInput.value;
}