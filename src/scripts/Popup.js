import {keyCodeEsc} from './utils.js';

export default class Popup {
  constructor (popupSelector, closeButtonSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(closeButtonSelector);

    this._handlerEscClose = this._handlerEscClose.bind(this);
    this._handlerClickOverlay = this._handlerClickOverlay.bind(this);
  }

  _handlerEscClose(event) {
    if (event.keyCode === keyCodeEsc) {
      this.close();
    }
  }

  _handlerClickOverlay(event) {
    if (event.target !== this._popup) return;
    this.close(); 
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handlerEscClose);
    document.addEventListener('click', this._handlerClickOverlay);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handlerEscClose);
    document.removeEventListener('click', this._handlerClickOverlay);
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    })
  }
}