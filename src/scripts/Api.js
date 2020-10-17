export default class Api {
  constructor(options){
    this._options = options;
    this._baseUrl = this._options.baseUrl;
    this._headers = this._options.headers;
  }

  // Получить начальные карточки
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {headers: this._headers})
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  // Добавление новой карточки на сервер
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
  }

  // Удалить карточку
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  // Постановка лайка карточке
  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
  }

  // Удаление лайка карточке
  unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }
  
  // Получить данные пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {headers: this._headers})
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  // Отредактировать данные пользователя
  editUserInfo(name, profession) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: profession
      })
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  // Отредактировать аватар пользователя
  editUserAvatar(urlAvatar) {
    console.log(urlAvatar);
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: urlAvatar
      })
    })
    .then(res => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
  }

}














