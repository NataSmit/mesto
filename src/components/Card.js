export class Card {
  constructor(data, userID, cardSelector, handleCardClick, handleDeleteClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._userID = userID;
    this._ownerID = data.owner._id
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .cloneNode(true);
     
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();
    this._setLikes();

    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector('.element__photo-img').src = this._link;
    this._element.querySelector('.element__photo-img').alt = this._alt;

    if(this._userID !== this._ownerID) {
      this._element.querySelector('.element__delete-button').style.display = 'none';
    }
    
    return this._element;
  }

  _setLikes() {
    const likeCounter = this._element.querySelector('.element__like-counter');
    likeCounter.textContent = this._likes.length;
  }

 
  _setEventListeners() {
    this._element.querySelector('.element__icon').addEventListener('click', this._setLike);
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._handleDeleteClick(this._id);
      
    });
    this._element.querySelector('.element__photo-img').addEventListener('click', () => { 
      this._handleCardClick(this._name, this._link); 
    }); 
 }
 
 _setLike (event) {
  event.target.classList.toggle('element__icon_state_active');
 }

  deliteCard (event) {
    event.target.closest('.element').remove();
  };


}