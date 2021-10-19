class Auth {
  constructor(option) {
    this._BASE_URL = option.baseUrl;
    this._headers = option.headers;
  }

  setNewUser(password, email) {
    return fetch(`${this._BASE_URL}/signup`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({password, email}),
    })
        .then(res => {
          return this._getResponseData(res)
        })
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }
}

export const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    "Content-type": "application/json"
  }
});