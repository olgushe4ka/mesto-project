export class Api {
  constructor(config) {
    this._config = config;
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserID() {
    return fetch(`${this._config.baseUrl}/users/me/_id`, {
      headers: this._config.headers,
    }).then(this.checkResponse);
  }

  getProfileInfo = () => {
    return fetch(`${this._config.baseUrl}/users/me`, {
      headers: this._config.headers,
    }).then(this.checkResponse);
  };

  getCards = () => {
    return fetch(`${this._config.baseUrl}/cards`, {
      headers: this._config.headers,
    }).then(this.checkResponse);
  };

  patchProfileInfo = (dataProfile) => {
    return fetch(`${this._config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._config.headers,
      body: JSON.stringify(dataProfile),
    }).then(this.checkResponse);
  };

  patchAvatar(avatar) {
    return fetch(`${this._config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._config.headers,
      body: JSON.stringify(avatar)
    }).then(this.checkResponse);
  }


  postCards(data) {
    return fetch(`${this._config.baseUrl}/cards`, {
      method: "POST",
      headers: this._config.headers,
      body: JSON.stringify(data),
    }).then(this.checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._config.headers,
    }).then(this.checkResponse);
  }

  putLike(cardId) {
    return fetch(`${this._config.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._config.headers,
    }).then(this.checkResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this._config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._config.headers,
    }).then(this.checkResponse);
  }
}
