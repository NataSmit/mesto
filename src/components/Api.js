class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {headers: this._headers})
    
      .then((res) => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {headers: this._headers})
    
      .then((res) => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  editProfile(info) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about
      })
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
      
  }

  addCard(obj) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        link: obj.link
      })
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }
  
  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }
  
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
  }

  updateAvatar(obj) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: obj.avatar
      })
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
      
  }

}


export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '9eb97aaf-6c90-4495-9f7a-000029edf688',
    'Content-Type': 'application/json'
  }
}); 