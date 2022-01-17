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

popupSubmitButton.addEventListener('click', closeButtonClick);



const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-activity');

function formSubmitHandler (evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileProfession.textContent = jobValue;
}
formElement.addEventListener('submit', formSubmitHandler); 








