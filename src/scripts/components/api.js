export function getProfileInfo() {
  return fetch('https://nomoreparties.co/v1/plus-cohort-13//users/me', {
    headers: {
      authorization: 'cec4068b-d318-4572-975e-c977f41c2ea2'
    }
  })
}


export function getCards() {
  return fetch('https://nomoreparties.co/v1/plus-cohort-13/cards', {
    headers: {
      authorization: 'cec4068b-d318-4572-975e-c977f41c2ea2'
    }
  });
}

export function patchProfileInfo(name, about) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-13/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'cec4068b-d318-4572-975e-c977f41c2ea2',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  });
}



export function patchAvatar(avatar) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-13/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: 'cec4068b-d318-4572-975e-c977f41c2ea2',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatar
    })
  });
}



export function postCards(name, link) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-13/cards', {
    method: 'POST',
    headers: {
      authorization: 'cec4068b-d318-4572-975e-c977f41c2ea2',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      link: link
    })
  });
}


export function deleteCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-13/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'cec4068b-d318-4572-975e-c977f41c2ea2',
    }
  });
}

export function putLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-13/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: 'cec4068b-d318-4572-975e-c977f41c2ea2',
    }
  });
}

export function deleteLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-13/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'cec4068b-d318-4572-975e-c977f41c2ea2',
    }
  });
}
