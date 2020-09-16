// @TODO Избавиться от зависимости (вроде в следующем спринте будем делать отдельный класс Popup)
import {openPopup, popupImageWrap, fillPopupImage} from './index.js';

export default class Card {
  constructor(titleCard, linkCard, templateSelector) {
    this._titleCard = titleCard;
    this._linkCard = linkCard;
    this._templateSelector = templateSelector;
  }

  _likeCardHundler = () => {
    this._likeButton.classList.toggle('grid-item__like_liked');
  }

  _openPopupHundler = () => {
    openPopup(popupImageWrap);
    fillPopupImage(this._image);
  }

  _deleteCardHundler = () => {
    this._deleteIcon.closest('.grid-item').remove();
  }

  _setEventListeners = () => {
    this._deleteIcon.addEventListener('click', this._deleteCardHundler);
    this._image.addEventListener('click', this._openPopupHundler);
    this._likeButton.addEventListener('click', this._likeCardHundler);
  }

  _generateCard(container) {
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
  
  renderCard = (container) => {
    container.prepend(this._generateCard(container));
  }
}

