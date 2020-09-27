import keyCodeEsc from './utils.js';

export default class Popup {
  constructor (popupSelector) {
    this._popup = popupSelector;
    this._closeButton = this._popup.closest('.popup__button-close');
  }

  _handlerEscClose(event) {
    if (event.keyCode === keyCodeEsc) {
      this.close();
    }
  }

  _handlerClickOverlay(event) {
    if (event.target !== event.currentTarget) return;
    this.close();
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handlerEscClose.bind(this));
    document.addEventListener('click', this._handlerClickOverlay.bind(this));
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handlerEscClose.bind(this));
    document.removeEventListener('click', this._handlerClickOverlay.bind(this));
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    })
  }
}