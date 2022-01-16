const profileEditButton = document.querySelector('.profile__edit-button');

const popupSubmitButton = document.querySelector('.popup__submit-btn');

const popupCloseButton = document.querySelector('.popup__close-button');

const blockPopup = document.querySelector('.popup');

function EditButtonClick() {
  blockPopup.classList.add('popup_opened')
};
profileEditButton.addEventListener('click', EditButtonClick);

function closeButtonClick() {
  blockPopup.classList.remove('popup_opened')
};
popupCloseButton.addEventListener('click', closeButtonClick);



let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__form-name');

let jobInput =document.querySelector('.popup__form-activity');




function formSubmitHandler (evt) {
  evt.preventDefault();
  let nameValue = nameInput.getAttribute('value');
  let jobValue = jobInput.getAttribute('value');
  nameInput.textContent = 'nameValue';
  jobInput.textContent = 'jobValue';
}

formElement.addEventListener('submit', formSubmitHandler);

