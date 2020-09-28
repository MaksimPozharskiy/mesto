import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import {initialCards} from './scripts/initial-cards.js';
import {settingsForm} from './scripts/constants.js';
import {openPopup,
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
        popupImageSelector,
        popupImageCloseButtonSelector,
        imageSelector,
        popupImageTitleSelector,
        popupAdd,
        popupAddOpenButton,
        popupAddCloseButton,
        popupAddForm,
        titleCardInput,
        linkCardInput,
        gridCardTemplateId,
        keyCodeEsc,
        container} from './scripts/utils.js';
import './pages/index.css';
// ____________________________________________________
// ============== Обработчики событий =================
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// ==Открытие попапа редактирование профиля==
popupEditOpenButton.addEventListener('click', function() {
  openPopup(popupEdit);
  editFormValidator.resetForm();
  //При открытии заполняем форму редактирования профиля текущими значениями
  nameInput.value = profileName.textContent;
  professionInput.value =  profileProfession.textContent;
});

// ==Открытие попапа добавления картинки==
popupAddOpenButton.addEventListener('click', function() {
  openPopup(popupAdd);
  addFormValidator.resetForm();
})

// ==Закрытие попапов==
popupEditCloseButton.addEventListener('click', function() {
  closePopup(popupEdit);
})
popupAddCloseButton.addEventListener('click', function() {
  closePopup(popupAdd);
})
// popupImageCloseButton.addEventListener('click', function() {
//   closePopup(popupImageWrap);
// })

// ==Обработчик формы редактирования профиля==
popupEditForm.addEventListener('submit', formEditSubmitHandler); // Кнопка "Сохранить"

// // ==Обработчик формы добавления карточки==
const formAddSubmitHandler = (event) => {
  event.preventDefault();

  const titleCard = titleCardInput.value;
  const linkCard = linkCardInput.value;
  container.prepend(new Card(titleCard, linkCard, gridCardTemplateId, 
    {handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    }}).generateCard());
  closePopup(popupAdd);
}

// ==Обработчик формы добавления карточки==
popupAddForm.addEventListener('submit', formAddSubmitHandler);

// ____________________________________________________
// ======== Изначальное состояние страницы ============
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// Генерация изначальных карточек
const defaultCardGrid = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card (item.name, item.link, gridCardTemplateId, 
      {handleCardClick: (name, link) => {
        popupWithImage.open(name, link);
      }});
    const cardElement = card.generateCard();
    defaultCardGrid.addItem(cardElement);
  }
}, container);

defaultCardGrid.renderItems();

// Включаем валидацию формы редактрования профиля
const editFormValidator = new FormValidator(settingsForm, popupEditForm);
editFormValidator.enableValidation();

// Включаем валидацию формы добавления карточки
const addFormValidator = new FormValidator(settingsForm, popupAddForm);
addFormValidator.enableValidation();

const popupWithImage = new PopupWithImage(popupImageSelector, popupImageCloseButtonSelector, imageSelector, popupImageTitleSelector);
popupWithImage.setEventListeners();