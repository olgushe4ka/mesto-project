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
      headers: this._config.headers
    })
  }

  getProfileInfo = () => {
    return fetch(`${this._config.baseUrl}/users/me`, {
      headers: this._config.headers
    })
  }

  getCards = () => {
    return fetch(`${this._config.baseUrl}/cards`, {
      headers: this._config.headers
    })
  }

  patchProfileInfo = (name, about) => {
    return fetch(`${this._config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._config.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    });
  }

  patchAvatar(avatar) {
    return fetch(`${this._config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._config.headers,
      body: JSON.stringify({
        avatar: avatar
      })
    });
  }

  postCards(name, link) {
    return fetch(`${this._config.baseUrl}/cards`, {
      method: 'POST',
      headers: this._config.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._config.headers
    });
  }

  putLike(cardId) {
    return fetch(`${this._config.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._config.headers
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._config.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._config.headers
    });
  }
}













// Без ООП

// const this.config = {
//   baseUrl: 'https://nomoreparties.co/v1/plus-cohort-13',
//   headers: {
//     'authorization': 'cec4068b-d318-4572-975e-c977f41c2ea2',
//     'Content-Type': 'application/json',
//   },
// };


// export function checkResponse(res) {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Ошибка: ${res.status}`);
// }


// export function getUserID() {
//   return fetch(`${this.config.baseUrl}/users/me/_id`, {
//     headers: this.config.headers
//   })
// }

// export const getProfileInfo = () => {
//   return fetch(`${this.config.baseUrl}/users/me`, {
//     headers: this.config.headers
//   })
// }


// export const getCards = () => {
//   return fetch(`${this.config.baseUrl}/cards`, {
//     headers: this.config.headers
//   })
// }

// export const patchProfileInfo = (name, about) => {
//   return fetch(`${this.config.baseUrl}/users/me`, {
//     method: 'PATCH',
//     headers: this.config.headers,
//     body: JSON.stringify({
//       name: name,
//       about: about
//     })
//   });
// }

// export function patchAvatar(avatar) {
//   return fetch(`${this.config.baseUrl}/users/me/avatar`, {
//     method: 'PATCH',
//     headers: this.config.headers,
//     body: JSON.stringify({
//     avatar: avatar
//     })
//   });
// }


// export function postCards(name, link) {
//   return fetch(`${this.config.baseUrl}/cards`, {
//     method: 'POST',
//     headers: this.config.headers,
//     body: JSON.stringify({
//       name: name,
//       link: link
//     })
//   });
// }


// export function deleteCard(cardId) {
//   return fetch(`${this.config.baseUrl}/cards/${cardId}`, {
//     method: 'DELETE',
//     headers: this.config.headers
//   });
// }

// export function putLike(cardId) {
//   return fetch(`${this.config.baseUrl}/cards/likes/${cardId}`, {
//     method: 'PUT',
//     headers: this.config.headers
//   });
// }

// export function deleteLike(cardId) {
//   return fetch(`${this.config.baseUrl}/cards/likes/${cardId}`, {
//     method: 'DELETE',
//     headers: this.config.headers
//   });
// }
