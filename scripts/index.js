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








