let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

let popup = document.querySelector('.popup')
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__button-close');
let popupForm = popup.querySelector('.popup__form');

// Закрытие/открытие попапа по кнопкам
let popupToggle = () => {
  popup.classList.toggle('popup_opened')
  fillValueForm();
}

// Закрытие попапа по клике на оверлей
let closePopup = (event) => { 
  if (event.target !== event.currentTarget) return;   
  popupToggle(event);
}

// Обработчик формы 
let formSubmitHandler = event => {
  event.preventDefault();

  let nameInput = popup.querySelector('.popup__input_name_name');
  let professionInput = popup.querySelector('.popup__input_name_profession');
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;

  popupToggle();
}

// Функция для изначального заполнения значений полей формы
let fillValueForm = () => {
  let nameInput = popup.querySelector('.popup__input_name_name');
  let professionInput = popup.querySelector('.popup__input_name_profession');
  nameInput.value = profileName.textContent;
  professionInput.value =  profileProfession.textContent;
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closePopup);

popupForm.addEventListener('submit', formSubmitHandler); // Кнопка "Сохранить"
