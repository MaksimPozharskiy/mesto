// // ____________________________________________________
// // =================== Переменные =====================
// // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// // ==Попап редактирования профиля==
const profileSelectors = {
  profileNameSelector: '.profile__name', 
  profileProfessionSelector: '.profile__profession'
}
const profileName = document.querySelector(profileSelectors.profileNameSelector);
const profileProfession = document.querySelector(profileSelectors.profileProfessionSelector);
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditSelector = '.popup_type_edit';
const popupEditCloseButtonSelector = '.popup__button-close';
const popupEditForm = popupEdit.querySelector('.popup__form');
const nameInput = popupEdit.querySelector('.popup__input_name_name');
const professionInput = popupEdit.querySelector('.popup__input_name_profession');

// // ==Попап увеличения картинки==
const popupImageWrap = document.querySelector('.popup_type_image');
const popupImageSelector = '.popup_type_image';
const popupImageCloseButtonSelector = '.popup__button-close';
const imageSelector = '.popup__image';
const popupImageTitleSelector = '.popup__title-image';

// ==Попап добавления карточки==
const popupAddSelector = '.popup_type_add';
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButtonSelector = '.popup__button-close';
const popupAdd = document.querySelector('.popup_type_add');
const popupAddForm = popupAdd.querySelector('.popup__form');
const titleCardInput = popupAdd.querySelector('.popup__input_name_title-card');
const linkCardInput = popupAdd.querySelector('.popup__input_name_link-card');

// ==Добавление карточки пользователем==
const gridCardTemplateId = '#grid-item';

// ==Кнопки закрытия попапов==
const keyCodeEsc = 27;

// Контейнер карточек
const container = document.querySelector('.grid-photos');

export {
  profileSelectors,
  profileName,
  profileProfession,
  popupEditOpenButton,
  popupEdit,
  popupEditSelector,
  popupEditCloseButtonSelector,
  popupEditForm,
  nameInput,
  professionInput,
  popupImageWrap,
  popupImageSelector,
  popupImageCloseButtonSelector,
  imageSelector,
  popupImageTitleSelector,
  popupAddSelector,
  popupAddOpenButton,
  popupAddCloseButtonSelector,
  popupAddForm,
  titleCardInput,
  linkCardInput,
  gridCardTemplateId,
  keyCodeEsc,
  popupAdd,
  container
  }