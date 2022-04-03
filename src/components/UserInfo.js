export default class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}) {
   this._userName = document.querySelector(nameSelector),
   this._userProfession = document.querySelector(aboutSelector),
   this._userAvatar = document.querySelector(avatarSelector)
   
  }

  getUserInfo() {                       //возвращает объект с данными пользователя
    return {
      name: this._userName.textContent,
      about: this._userProfession.textContent,
      avatar: this._userAvatar.src
    }
  }

  setUserInfo(info) {                       //принимает новые данные пользователя и добавляет их на страницу              
    this._userName.textContent = info.name;
    this._userProfession.textContent = info.about;
  }
  
  setAvatar(info) {
    this._userAvatar.src = info.avatar;
  }
}