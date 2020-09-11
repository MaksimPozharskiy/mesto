export default class Card {
  constructor(titleCard, linkCard, templateSelector) {
    this._titleCard = titleCard;
    this._linkCard = linkCard;
    this._templateSelector = templateSelector;
  }


  _likeCardHundler() {
    
  }

  _openPopupHundler = () => {
    
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

    container.prepend(this._view);
  }
}

