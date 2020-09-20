import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './initial-cards.js';
import {settingsForm} from './constants.js';
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
        gridPhotos,
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
        container} from './utils.js';

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
popupImageCloseButton.addEventListener('click', function() {
  closePopup(popupImageWrap);
})

// ==Обработчик формы редактирования профиля==
popupEditForm.addEventListener('submit', formEditSubmitHandler); // Кнопка "Сохранить"

// // ==Обработчик формы добавления карточки==
const formAddSubmitHandler = (event) => {
  event.preventDefault();

  const titleCard = titleCardInput.value;
  const linkCard = linkCardInput.value;
  container.prepend(new Card(titleCard, linkCard, gridCardTemplateId).generateCard());
  closePopup(popupAdd);
}

// ==Обработчик формы добавления карточки==
popupAddForm.addEventListener('submit', formAddSubmitHandler);

// ____________________________________________________
// ======== Изначальное состояние страницы ============
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// Генерация изначальных карточек
initialCards.forEach(item => {
  container.prepend(new Card(item.name, item.link, gridCardTemplateId, openPopup, popupImageWrap, fillPopupImage).generateCard());
})

// Включаем валидацию формы редактрования профиля
const editFormValidator = new FormValidator(settingsForm, popupEditForm);
editFormValidator.enableValidation();

// Включаем валидацию формы добавления карточки
const addFormValidator = new FormValidator(settingsForm, popupAddForm);
addFormValidator.enableValidation();
