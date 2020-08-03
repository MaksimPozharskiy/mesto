let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

let popup = document.querySelector('.popup')
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__button-close');
let popupForm = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_name_name');
let professionInput = popup.querySelector('.popup__input_name_profession');

// Закрытие/открытие попапа по кнопкам
let popupToggle = () => {
  popup.classList.toggle('popup_opened');
}

// Закрытие попапа по клике на оверлей
let closePopup = (event) => { 
  if (event.target !== event.currentTarget) return;   
  popupToggle(event);
}

// Обработчик формы 
let formSubmitHandler = event => {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;

  popupToggle();
}

// Функция для изначального заполнения значений полей формы
let fillValueForm = () => {

  nameInput.value = profileName.textContent;
  professionInput.value =  profileProfession.textContent;
  popupToggle();
}

popupOpenButton.addEventListener('click', fillValueForm);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closePopup);

popupForm.addEventListener('submit', formSubmitHandler); // Кнопка "Сохранить"
