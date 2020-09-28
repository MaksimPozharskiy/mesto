import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor (popupSelector, closeButtonSelector, imageSelector, titleSelector) {
    super(popupSelector, closeButtonSelector);
    this._image = this._popup.querySelector(imageSelector);
    this._imageName = this._popup.querySelector(titleSelector);
  }

  open(name, link) {
    this._image.alt = name;
    this._image.src = link;
    this._imageName.textContent = name;
    super.open();
  }
}

export default PopupWithImage;