export default class UserInfo {
  constructor({nameSelector, aboutSelector}) {
   this._userName = document.querySelector(nameSelector),
   this._userProfession = document.querySelector(aboutSelector)
  
  }

  getUserInfo() {                       //возвращает объект с данными пользователя
    return {
      name: this._userName.textContent,
      about: this._userProfession.textContent,
    }
  }

  setUserInfo(info) {                       //принимает новые данные пользователя и добавляет их на страницу              
    this._userName.textContent = info.name
    this._userProfession.textContent = info.about
  }

}