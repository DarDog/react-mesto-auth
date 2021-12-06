class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headersContent = options.headers
  }


  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      headers: this._headersContent
    })
        .then((res) => {
          return this._getResponseData(res);
        });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      credentials: 'include',
      headers: this._headersContent
    })
        .then((res) => {
          return this._getResponseData(res);
        });
  }

  setUserInfo(userInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headersContent,
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about
      })
    })
        .then((res) => {
          return this._getResponseData(res);
        });
  }

  setCard(card) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headersContent,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      })
    })
        .then(this._getResponseData);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headersContent,
    })
        .then(this._getResponseData);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: isLiked ? 'PUT' : 'DELETE',
      credentials: 'include',
      headers: this._headersContent
    })
        .then(this._getResponseData)
  }

  setAvatar(userInfo) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headersContent,
      body: JSON.stringify({
        avatar: userInfo.avatar
      })
    })
        .then(this._getResponseData);
  }


  _getResponseData(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }
}

export const api = new Api({
  baseUrl: 'http://api.mesto.subb.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json'
  }
})
