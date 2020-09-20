// // ____________________________________________________
// // =================== Переменные =====================
// // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// // ==Попап редактирования профиля==
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditCloseButton = popupEdit.querySelector('.popup__button-close');
const popupEditForm = popupEdit.querySelector('.popup__form');
const nameInput = popupEdit.querySelector('.popup__input_name_name');
const professionInput = popupEdit.querySelector('.popup__input_name_profession');

// // ==Попап увеличения картинки==
const popupImageWrap = document.querySelector('.popup_type_image');
const popupImageCloseButton = popupImageWrap.querySelector('.popup__button-close')
const popupImage = popupImageWrap.querySelector('.popup__image');
const popupImageTitle = popupImageWrap.querySelector('.popup__title-image');

// ==Попап добавления карточки==
const popupAdd = document.querySelector('.popup_type_add')
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = popupAdd.querySelector('.popup__button-close');
const popupAddForm = popupAdd.querySelector('.popup__form');
const titleCardInput = popupAdd.querySelector('.popup__input_name_title-card');
const linkCardInput = popupAdd.querySelector('.popup__input_name_link-card');

// ==Добавление карточки пользователем==
const gridCardTemplateId = '#grid-item';

// ==Кнопки закрытия попапов==
const keyCodeEsc = 27;

// Контейнер карточек
const container = document.querySelector('.grid-photos');

// // _________________________________________________
// // =================== Функции =====================
// // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// ==Функция открытия попапа==
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscKey);
  popup.addEventListener('click', closePopupOverlay);
}

// ==Функция закрытия попапа по нажатию Esc==
const closePopupEscKey = (event) => {
  if (event.keyCode === keyCodeEsc) {
    closePopup(document.querySelector('.popup_opened'));
    document.removeEventListener('keydown', closePopupEscKey);
  }
}

// ==Функция закрытия попапа==
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupOverlay);
}

// ==Закрытие попапа по клике на оверлей==
const closePopupOverlay = event => { 
  if (event.target !== event.currentTarget) return;   
  closePopup(event.target);
}

// // ==Обработчик формы редактирования профиля==
const formEditSubmitHandler = (event) => {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;

  closePopup(popupEdit);
}

// ==Функция создания попапа с увеличеной картинкой==
const fillPopupImage = (image) => {
  popupImage.src = image.src;
  popupImageTitle.textContent = image.alt;
}

export {
  openPopup,
  closePopupEscKey,
  closePopup,
  closePopupOverlay,
  formEditSubmitHandler,
  fillPopupImage,
  profileName,
  profileProfession,
  popupEditOpenButton,
  popupEdit,
  popupEditCloseButton,
  popupEditForm,
  nameInput,
  professionInput,
  popupImageWrap,
  popupImageCloseButton,
  popupImage,
  popupImageTitle,
  popupAdd,
  popupAddOpenButton,
  popupAddCloseButton,
  popupAddForm,
  titleCardInput,
  linkCardInput,
  gridCardTemplateId,
  keyCodeEsc,
  container
  }