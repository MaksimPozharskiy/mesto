import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import {initialCards} from './scripts/initial-cards.js';
import {settingsForm} from './scripts/constants.js';
import {
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
        popupAdd,
        gridCardTemplateId,
        keyCodeEsc,
        container} from './scripts/utils.js';
import './pages/index.css';
// ____________________________________________________
// ============== Обработчики событий =================
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// ==Открытие попапа редактирование профиля==
popupEditOpenButton.addEventListener('click', function() {
  popupEditProfile.open();
  editFormValidator.resetForm();
  //При открытии заполняем форму редактирования профиля текущими значениями
  nameInput.value = profileName.textContent;
  professionInput.value =  profileProfession.textContent;
});

// ==Открытие попапа добавления картинки==
popupAddOpenButton.addEventListener('click', function() {
  popupAddCard.open();
  addFormValidator.resetForm();
})


// ==Обработчик формы редактирования профиля==
const formEditSubmitHandler = (event) => {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;

  popupEditProfile.close();
}
// ==Обработчик формы добавления карточки==
const formAddSubmitHandler = (event) => {
  event.preventDefault();

  const titleCard = titleCardInput.value;
  const linkCard = linkCardInput.value;
  container.prepend(new Card(titleCard, linkCard, gridCardTemplateId, 
    {handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    }}).generateCard());
    popupAddCard.close();
}

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

//Попап увелечения изображения
const popupWithImage = new PopupWithImage(popupImageSelector, popupImageCloseButtonSelector, imageSelector, popupImageTitleSelector);
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddSelector, popupAddCloseButtonSelector,
  formAddSubmitHandler)
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm(popupEditSelector, popupEditCloseButtonSelector,
  formEditSubmitHandler)
popupEditProfile.setEventListeners();