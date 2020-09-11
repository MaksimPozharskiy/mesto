// @TODO Избавиться от зависимости (вроде в следующем спринте будем делать отдельный класс Popup)
import {openPopup, popupImageWrap} from './utils.js';
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
  }

  _deleteCardHundler = () => {
    this._deleteIcon.closest('.grid-item').remove();
  }

  render(container) {
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
    // Навешиваем обработчики
    this._deleteIcon.addEventListener('click', this._deleteCardHundler);
    this._image.addEventListener('click', this._openPopupHundler);
    this._likeButton.addEventListener('click', this._likeCardHundler);

    container.prepend(this._view);
  }
}

