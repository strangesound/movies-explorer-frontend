class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }


  getInitialCards() {

    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        return this._returnResInJSON(res);
      })
  }


  addNewCard({ name, link }) {

    return fetch(`${this._address}/cards`, {
      method: 'Post',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })

      .then((res) => {
        return this._returnResInJSON(res);
      })
  }


  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        return this._returnResInJSON(res);
      })
  }

  patchUserInfo(name, job) {
    // console.log('patchUserInfo',name, job)
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: job
      })
    })
      .then((res) => {
        return this._returnResInJSON(res);
      })
  }

  patchAvatarImage(imageUrl) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: imageUrl
      })
    })
      .then((res) => {
        return this._returnResInJSON(res);
      })
  }
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._address}/cards/likes/${cardId}`, {
      method: isLiked ? "DELETE": "PUT",
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        console.log(cardId, isLiked, res)

        return this._returnResInJSON(res);
      })

  }
  setLike(cardId) {
    return fetch(`${this._address}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        return this._returnResInJSON(res);
      })
  }

  removeLike(cardId) {
    return fetch(`${this._address}/cards/likes/${cardId}`, {
      method: 'DELETE',

      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        return this._returnResInJSON(res);
      })
  }

  removeCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
      method: 'DELETE',

      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        return this._returnResInJSON(res);
      })
  }

  _returnResInJSON(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Что-то пошло не так: ${res.status}`));
  }



}
export const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-19',
  token: '573df025-a590-432a-b9ad-3031215c8ade'
})
