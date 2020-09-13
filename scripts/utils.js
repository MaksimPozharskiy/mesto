export {openPopup, popupImageWrap, fillPopupImage};
// // ____________________________________________________
// // =================== Переменные =====================
// // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
const popupImageWrap = document.querySelector('.popup_type_image');
const popupImage = popupImageWrap.querySelector('.popup__image');
const popupImageTitle = popupImageWrap.querySelector('.popup__title-image');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const nameInput = popupEdit.querySelector('.popup__input_name_name');
const professionInput = popupEdit.querySelector('.popup__input_name_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');


// // _________________________________________________
// // =================== Функции =====================
// //  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// ==Функция открытия попапа==
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.parentNode.addEventListener('keydown', closePopupEscKey);
}

// ==Функция закрытия попапа==
const closePopup = () => document.querySelector('.popup_opened').classList.remove('popup_opened');

// ==Функция закрытия попапа по нажатию Esc==
const closePopupEscKey = (evt) => {
  if (evt.keyCode === 27) {
    document.querySelector('.popup_opened').parentNode.removeEventListener('keydown', closePopupEscKey);
    closePopup();
  }
}

// ==Функция закрытия попапа по клике на оверлей==
const closePopupOverlay = event => { 
  if (event.target !== event.currentTarget) return;   
  closePopup();
}

// ==Функция создания попапа с увеличеной картинкой==
const fillPopupImage = (image) => {
    popupImage.src = image.src;
    popupImageTitle.textContent = image.alt;
}

// // ____________________________________________________
// // ============== Обработчики событий =================
// // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// ==Закрытие попапов по оверлею==
popupEdit.addEventListener('click', closePopupOverlay);
popupAdd.addEventListener('click', closePopupOverlay);
popupImageWrap.addEventListener('click', closePopupOverlay);

// ==Навесить на все кнопки закрытия фукционал закрытия==
popupCloseButtons.forEach(item => {
  item.addEventListener('click', closePopup);
})

// ==Редактирование профиля==
popupEditOpenButton.addEventListener('click', function() {
  openPopup(popupEdit);
  //При открытии заполняем форму редактирования профиля текущими значениями
  nameInput.value = profileName.textContent;
  professionInput.value =  profileProfession.textContent;
});

// ==Открытие попапов==
popupAddOpenButton.addEventListener('click', function() {
  openPopup(popupAdd);
})
