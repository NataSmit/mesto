export class Card {
  constructor(data, userID, cardSelector, handleCardClick, {handleDeleteClick, handleLikeClick}) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._userID = userID;
    this._ownerID = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .cloneNode(true)
    .querySelector('.element');
     
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.element__icon');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._cardPhoto = this._element.querySelector('.element__photo-img');
    this._elementName = this._element.querySelector('.element__name');
  
    this._setEventListeners();
    this.setLikes(this._likes);
    
    this._elementName.textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._alt;

    if(this._userID !== this._ownerID) {
      this._element.querySelector('.element__delete-button').style.display = 'none';
    }
    
    
    return this._element;
  }


  isLiked() {
    const userHasLikedCard = this._likes.find(user =>user._id === this._userID);
  
    return userHasLikedCard
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._likeCounter.textContent = this._likes.length;

    if(this.isLiked()) {
      this._makeHeartBlack();
      } else {
        this._makeHeartWhite();
      }
  }

  _makeHeartBlack() {
    this._likeButton.classList.add('element__icon_state_active');
    
  }; 
  
  _makeHeartWhite() {
    this._likeButton.classList.remove('element__icon_state_active');
    
  }; 
  
 
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => { 
      this._handleLikeClick(this._id);
    });
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._handleDeleteClick(this._id);
      
    });
    this._element.querySelector('.element__photo-img').addEventListener('click', () => { 
      this._handleCardClick(this._name, this._link); 
    }); 
 }
 
  deliteCard () {
    this._element.remove();
    this._element = null;
  };

}
  

