export class Card {
  constructor(data, userID, cardSelector, handleCardClick, {handleDeleteClick, handleLikeClick}) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes;
    this._id = data._id;
    console.log('this._id', this._id)
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
    
  
    this._setEventListeners();
    this._getInitialLikes()
    
    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector('.element__photo-img').src = this._link;
    this._element.querySelector('.element__photo-img').alt = this._alt;
    
    //this._likeCounter.textContent = this._likes.length;

    if(this._userID !== this._ownerID) {
      this._element.querySelector('.element__delete-button').style.display = 'none';
    }
    
    
    return this._element;
  }


  isLiked() {
    const userHasLikedCard = this._likes.find(user =>user._id === this._userID);
  
    return userHasLikedCard
  }

  _getInitialLikes() {
    this._likeCounter.textContent = this._likes.length;
    if(this.isLiked()) {
      this._makeHeartBlack();
    } else {
      this._makeHeartWhite();
    }
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
    this._element.querySelector('.element__icon').classList.add('element__icon_state_active');
    
  }; 
  
  _makeHeartWhite() {
    this._element.querySelector('.element__icon').classList.remove('element__icon_state_active');
    
  }; 
  

 
  _setEventListeners() {
    this._element.querySelector('.element__icon').addEventListener('click', () => { 
      this._handleLikeClick(this._element, this._id);
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

  //_setLikesTest() {
  //  this._likes.forEach(like => {
  //    if(like._id === this._userId) {
  //      console.log('this._userId', this._userId)
  //      console.log('like._id', like._id)
  //      this._likeButton.classList.add('element__icon_state_active');
  //    }
  //  });
  //}
}
  

