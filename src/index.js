import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import UserInfo from './scripts/UserInfo.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithSubmit from './scripts/PopupWithSubmit.js';
import Api from './scripts/Api.js';
import {settingsForm} from './scripts/constants.js';
import {
        profileSelectors,
        userId,
        profileName,
        profileProfession,
        popupAvatar,
        avatarImage,
        popupAvatarForm,
        popupAvatarButton,
        popupAvatarInput,
        popupAvatarSubmitButton,
        popupEditOpenButton,
        popupEdit,
        popupEditSelector,
        popupCloseButtonSelector,
        popupEditForm,
        nameInput,
        professionInput,
        popupImageWrap,
        popupImageSelector,
        imageSelector,
        popupImageTitleSelector,
        popupAddSelector,
        popupAddOpenButton,
        popupAddForm,
        titleCardInput,
        linkCardInput,
        popupAdd,
        popupConfirmSelector,
        gridCardTemplateId,
        keyCodeEsc,
        container} from './scripts/utils.js';
import './pages/index.css';
// ____________________________________________________
// ============== Обработчики событий =================
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

// ==Открытие попапа редактирование профиля==
const userInfo = new UserInfo(profileSelectors);
popupEditOpenButton.addEventListener('click', function() {
  popupEditProfile.open();
  editFormValidator.resetForm();
  popupEditProfile.resetWaitSubmitButton();

  const currentInfo = userInfo.getUserInfo();

  nameInput.value = currentInfo.name;
  professionInput.value = currentInfo.profession;
});

// ==Открытие попапа добавления картинки==
popupAddOpenButton.addEventListener('click', function() {
  popupAddCard.open();
  addFormValidator.resetForm();
  popupAddCard.resetWaitSubmitButton();
})

// ==Открытие попапа редактирования аватара==
popupAvatarButton.addEventListener('click', function() {
  popupEditAvatar.open();
  avatarFormValidator.resetForm();
  popupEditAvatar.resetWaitSubmitButton();
})

// ==Обработчик формы редактирования профиля==
const formEditSubmitHandler = (event) => {
  event.preventDefault();

  const info = {
    name: nameInput.value,
    profession: professionInput.value
  }
  popupEditProfile.waitSubmitButton('Сохранение...')
  api.editUserInfo(info.name, info.profession)
    .finally(() => {
      userInfo.setUserInfo(info);
      popupEditProfile.close();
    })
}
// ==Обработчик формы добавления карточки==
const formAddSubmitHandler = (event) => {
  event.preventDefault();

  const titleCard = titleCardInput.value;
  const linkCard = linkCardInput.value;
  api.addCard(titleCard, linkCard)
    .then(dataCard=> {
    const card = new Card (dataCard, userId, gridCardTemplateId,  
      {
        handleCardClick: (name, link) => {
          popupWithImage.open(name, link);
        },
        likeCardHandler: () => {
          const likedCard = card.likedCard();
          const resultApi = likedCard ? api.unlikeCard(card.getIdCard()) : api.likeCard(card.getIdCard());
    
          resultApi.then(data => {
              card.setLikes(data.likes) // Обновляем список лайкнувших карточку
              card.renderLikes(); // Отрисовываем на клиенте
            });
        },
        deleteCardHandler: () => {
          popupConfirm.open(card);
        }
      }, dataCard._id);
    const cardElement = card.generateCard();
    container.prepend(cardElement);
  });
  
  popupAddCard.close();
}

// ==Обработчик формы редактирования аватара==
const formEditAvatarSubmitHandler = (event) => {
  event.preventDefault();

  avatarImage.src = popupAvatarInput.value;
  popupEditAvatar.waitSubmitButton('Сохранение...');

  api.editUserAvatar(popupAvatarInput.value)
    .finally(() => {
      popupEditAvatar.close();
    });
}

// ==Обработчик формы подтверждения удаления==
const formDeleteSubmitHandler = (event, card) => {
  event.preventDefault();

  popupConfirm.waitSubmitButton('Удаление...');
  api.deleteCard(card.getIdCard())
    .then(response => {
      card.deleteCard();
    }).finally(() => {
      popupConfirm.close();
      popupConfirm.resetWaitSubmitButton();
    })
}
// ____________________________________________________
// ======== Изначальное состояние страницы ============
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// Класс для работы с API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
  headers: {
    authorization: 'e8e5e3a7-8ba0-46eb-8d27-e0f2fc68826d',
    'Content-Type': 'application/json'
  }
}); 

// Получаем карточки с сервера
// Генерация изначальных карточек
api.getInitialCards().then((cards) => {
  generateInitialCards(cards);
  }
);

// Функция генерации изначальных карточек
const generateInitialCards = (cards) => {
  const defaultCardGrid = new Section({
    items: cards,
    renderer: (item) => {
      const card = new Card (item, userId, gridCardTemplateId, 
        {
          handleCardClick: (name, link) => {
          popupWithImage.open(name, link);
        },
        likeCardHandler: () => {
          const likedCard = card.likedCard();
          const resultApi = likedCard ? api.unlikeCard(card.getIdCard()) : api.likeCard(card.getIdCard());

          resultApi.then(data => {
              card.setLikes(data.likes) // Обновляем список лайкнувших карточку
              card.renderLikes(); // Отрисовываем на клиенте
            });
        },
        deleteCardHandler: () => {
          popupConfirm.open(card);
        }
      }, item._id);
      const cardElement = card.generateCard();
      defaultCardGrid.addItem(cardElement);
    }
  }, container);
  defaultCardGrid.renderItems();

}

// Получаем с сервера данные пользователя
api.getUserInfo().then((data => {
  profileName.textContent = data.name;
  profileProfession.textContent = data.about;
  avatarImage.src = data.avatar;
}));


// Включаем валидацию формы редактрования профиля
const editFormValidator = new FormValidator(settingsForm, popupEditForm);
editFormValidator.enableValidation();

// Включаем валидацию формы добавления карточки
const addFormValidator = new FormValidator(settingsForm, popupAddForm);
addFormValidator.enableValidation();

// Включаем валидацию формы редактирования аватара
const avatarFormValidator = new FormValidator(settingsForm, popupAvatarForm);
avatarFormValidator.enableValidation();

//Попап увелечения изображения
const popupWithImage = new PopupWithImage(popupImageSelector, popupCloseButtonSelector, imageSelector, popupImageTitleSelector);
popupWithImage.setEventListeners();

// Попап добавления карточки
const popupAddCard = new PopupWithForm(popupAddSelector, popupCloseButtonSelector,
  formAddSubmitHandler)
popupAddCard.setEventListeners();

// Попап редактирования аватара
const popupEditAvatar = new PopupWithForm(profileSelectors.profileAvatarSelector, popupCloseButtonSelector,
  formEditAvatarSubmitHandler);
popupEditAvatar.setEventListeners();

// Попап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEditSelector, popupCloseButtonSelector,
  formEditSubmitHandler)
popupEditProfile.setEventListeners();

// Попап подтвеждения удаления
const popupConfirm = new PopupWithSubmit(popupConfirmSelector, popupCloseButtonSelector, 
  (evt, card) => {
    formDeleteSubmitHandler(evt, card)
  }
)
popupConfirm.setEventListeners();


