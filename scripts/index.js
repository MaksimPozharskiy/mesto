// ==Попап редактирования профиля==
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

const gridCardTemplate = document.querySelector('#grid-item').content;
const gridPhotos = document.querySelector('.grid-photos');

const renderInitialCards = (initialCards) => {
  initialCards.forEach(card => {
    const gridCardElement = gridCardTemplate.cloneNode(true);
    gridCardElement.querySelector('.grid-item__image').src = card.link;
    gridCardElement.querySelector('.grid-item__name').textContent = card.name;

    gridPhotos.append(gridCardElement);
  });
}
renderInitialCards(initialCards);

// ==Лайкнуть карточку==
const likeButton = gridPhotos.querySelectorAll('.grid-item__like');
// На каждую кнопку лайка навешиваем переключатель модификатора
likeButton.forEach(likeButton => {
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('grid-item__like_liked');
  })
})

// ==Удаление карточки==
const deleteIcons = document.querySelectorAll('.grid-item__delete-icon');

// На каждую иконку навешиваем событие удаление карточки по клику
deleteIcons.forEach(icon => {
  icon.addEventListener('click', function () {
    icon.closest('.grid-item').remove();
  });
})


