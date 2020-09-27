import {openPopup, popupImageWrap,fillPopupImage} from './utils.js';
export default class Card {
  constructor(titleCard, linkCard, templateSelector) {
    this._titleCard = titleCard;
    this._linkCard = linkCard;
    this._templateSelector = templateSelector;
  }

  _likeCardHandler() {
    this._likeButton.classList.toggle('grid-item__like_liked');
  }

  _openPopupHandler() {
    openPopup(popupImageWrap);
    fillPopupImage(this._image);
  }

  _deleteCardHandler() {
    this._deleteIcon.closest('.grid-item').remove();
  }

  _setEventListeners() {
    this._deleteIcon.addEventListener('click', this._deleteCardHandler.bind(this));
    this._image.addEventListener('click', this._openPopupHandler.bind(this));
    this._likeButton.addEventListener('click', this._likeCardHandler.bind(this));
  }

  generateCard() {
    //Формируем шаблон карточки
    this._template = document.querySelector(this._templateSelector).content;
    this._view = this._template.cloneNode(true);
    this._likeButton = this._view.querySelector('.grid-item__like');
    this._image = this._view.querySelector('.grid-item__image');
    this._deleteIcon = this._view.querySelector('.grid-item__delete-icon');
    // Заполняем содержимое карточки
    this._image.src = this._linkCard;
    this._image.alt = this._titleCard;
    this._view.querySelector('.grid-item__name').textContent = this._titleCard;
    this._setEventListeners();

    // Возвращаем готовую карточку
    return this._view;
  }

}

