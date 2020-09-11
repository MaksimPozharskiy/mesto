import Card from './Card.js';
// // ____________________________________________________
// // =================== Переменные =====================
// // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// // ==Попап редактирования профиля==
// const profileName = document.querySelector('.profile__name');
// const profileProfession = document.querySelector('.profile__profession');
// const popupEdit = document.querySelector('.popup_type_edit')
// const popupEditOpenButton = document.querySelector('.profile__edit-button');
// const popupEditForm = popupEdit.querySelector('.popup__form');
// const nameInput = popupEdit.querySelector('.popup__input_name_name');
// const professionInput = popupEdit.querySelector('.popup__input_name_profession');

// // ==Попап увеличения картинки==
// const gridPhotos = document.querySelectorAll('.grid-item__image');
const popupImageWrap = document.querySelector('.popup_type_image');
const popupImage = popupImageWrap.querySelector('.popup__image');
const popupImageTitle = popupImageWrap.querySelector('.popup__title-image');

// // ==Попап добавления карточки==
// const popupAdd = document.querySelector('.popup_type_add')
// const popupAddOpenButton = document.querySelector('.profile__add-button');
// const popupAddCloseButton = popupAdd.querySelector('.popup__button-close');
// const popupAddForm = popupAdd.querySelector('.popup__form');
// const titleCardInput = popupAdd.querySelector('.popup__input_name_title-card');
// const linkCardInput = popupAdd.querySelector('.popup__input_name_link-card');

// // ==Добавление карточки пользователем==
// const gridCardTemplate = document.querySelector('#grid-item').content;
// const gridPhotosContainer = document.querySelector('.grid-photos');

// // ==Кнопки закрытия попапов==
// const popupCloseButtons = document.querySelectorAll('.popup__button-close');

// // _________________________________________________
// // =================== Функции =====================
// // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// ==Функция открытия попапа==
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.parentNode.addEventListener('keydown', closePopupEscKey);
  console.log(1);
}

// // ==Функция закрытия попапа по нажатию Esc==
// const closePopupEscKey = (evt) => {
//   if (evt.keyCode === 27) {
//     document.querySelector('.popup_opened').parentNode.removeEventListener('keydown', closePopupEscKey);
//     closePopup();
//   }
// }

// // ==Функция закрытия попапа==
// const closePopup = () => document.querySelector('.popup_opened').classList.remove('popup_opened');

// // ==Закрытие попапа по клике на оверлей==
// const closePopupOverlay = event => { 
//   if (event.target !== event.currentTarget) return;   
//   closePopup();
// }

// // ==Обработчик формы редактирования профиля==
// const formEditSubmitHandler = (event) => {
//   event.preventDefault();

//   profileName.textContent = nameInput.value;
//   profileProfession.textContent = professionInput.value;

//   closePopup();
// }

// // ==Обработчик формы добавления карточки==
// const formAddSubmitHandler = (event) => {
//   event.preventDefault();

//   const titleCard = titleCardInput.value;
//   const linkCard = linkCardInput.value;
//   renderCard(titleCard, linkCard);
//   closePopup();
//   popupAddForm.reset(); // очищаем поля формы для следующего добавления карточки
// }

// // ==Генерация карточки==
// const renderCard = (titleCard, linkCard) => {
//   const gridCardElement = gridCardTemplate.cloneNode(true);
//   const likeButton = gridCardElement.querySelector('.grid-item__like');
//   const image = gridCardElement.querySelector('.grid-item__image')
//   const deleteIcon = gridCardElement.querySelector('.grid-item__delete-icon')

//   // Создаем содержимое карточки
//   image.src = linkCard;
//   image.alt = titleCard;
//   gridCardElement.querySelector('.grid-item__name').textContent = titleCard;
//   gridPhotosContainer.prepend(gridCardElement);

//   // Навешиваем слушатели на кнопки и картинку
//   likeButton.addEventListener('click', function () {
//     likeButton.classList.toggle('grid-item__like_liked');
//   })

//   image.addEventListener('click', function () {
//     openPopup(popupImageWrap);
//     popupImage.src = image.src;
//     popupImageTitle.textContent = image.alt;
//   });

//   deleteIcon.addEventListener('click', function () {
//     deleteIcon.closest('.grid-item').remove();
//   });
// }

// // ____________________________________________________
// // ============== Обработчики событий =================
// // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// // ==Редактирование профиля==
// popupEditOpenButton.addEventListener('click', function() {
//   openPopup(popupEdit);
//   //При открытии заполняем форму редактирования профиля текущими значениями
//   nameInput.value = profileName.textContent;
//   professionInput.value =  profileProfession.textContent;
// });

// // ==Открытие попапов==
// popupAddOpenButton.addEventListener('click', function() {
//   openPopup(popupAdd);
// })

// // ==Закрытие попапов по оверлею==
// popupEdit.addEventListener('click', closePopupOverlay);
// popupAdd.addEventListener('click', closePopupOverlay);
// popupImageWrap.addEventListener('click', closePopupOverlay);

// // ==Навесить на все кнопки закрытия фукционал закрытия==
// popupCloseButtons.forEach(item => {
//   item.addEventListener('click', closePopup);
// })

// // ==Обработчик формы редактирования профиля==
// popupEditForm.addEventListener('submit', formEditSubmitHandler); // Кнопка "Сохранить"

// // ==Обработчик формы добавления карточки==
// popupAddForm.addEventListener('submit', formAddSubmitHandler);

// // ==Обработчик закрытия формы по Ecs==


// ____________________________________________________
// ======== Изначальное состояние страницы ============
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// ==Генерация первых 6 карточек из коробки==
const initialCards =[
  {
    name: 'Конь на лугу',
    link: './images/kate-nesmieian-rRXUtG1Kbqs-unsplash.jpg'
  },
  {
    name: 'Лошадки',
    link: './images/mark-neal-Am8FAT_PoJM-unsplash.jpg'
  },
  {
    name: 'Милая лошадь',
    link: './images/navid-bazari-Vw4oefoH4Iw-unsplash.jpg'
  },
  {
    name: 'Разговор коней',
    link: './images/raphael-wicker-P6JRr7-FxLw-unsplash.jpg'
  },
  {
    name: 'Утренний завтрак',
    link: './images/rich-dahlgren--MMRAIrqgUE-unsplash.jpg'
  },
  {
    name: 'Внимательный конь',
    link: './images/santiago-martin-7NC_LcUaky8-unsplash.jpg'
  }
]


// Генерация изначальных карточек
const container = document.querySelector('.grid-photos');
for (let i = 0; i < initialCards.length; i++) {
  new Card(initialCards[i].name, initialCards[i].link, '#grid-item').render(container);
}
