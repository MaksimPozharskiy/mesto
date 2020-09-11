const popupImageWrap = document.querySelector('.popup_type_image');
const popupImage = popupImageWrap.querySelector('.popup__image');
const popupImageTitle = popupImageWrap.querySelector('.popup__title-image');

// ==Функция открытия попапа==
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.parentNode.addEventListener('keydown', closePopupEscKey);
}

// ==Функция закрытия попапа по нажатию Esc==
const closePopupEscKey = (evt) => {
  if (evt.keyCode === 27) {
    document.querySelector('.popup_opened').parentNode.removeEventListener('keydown', closePopupEscKey);
    closePopup();
  }
}

// ==Функция закрытия попапа==
const closePopup = () => document.querySelector('.popup_opened').classList.remove('popup_opened');

// ==Закрытие попапа по клике на оверлей==
const closePopupOverlay = event => { 
  if (event.target !== event.currentTarget) return;   
  closePopup();
}

export {openPopup, popupImageWrap};