// @TODO Хочу сделать одну функцию по открытию и закрытию попапа, что бы на вход 
// принимала попап и понимала какой надо закрыть. Не получилось сделать такое, скореее всего
// надо закрытие/открытие переписать с toggle на 2 функции (открытия и закрытия) 

// ==Попап редактирования профиля==
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

const popupEdit = document.querySelector('.popup_type_edit')
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEditCloseButton = popupEdit.querySelector('.popup__button-close');
const popupEditForm = popupEdit.querySelector('.popup__form');
const nameInput = popupEdit.querySelector('.popup__input_name_name');
const professionInput = popupEdit.querySelector('.popup__input_name_profession');

// Закрытие/открытие попапа по кнопкам
const popupEditToggle = () => {
  popupEdit.classList.toggle('popup_opened');
}

// Закрытие попапа по клике на оверлей
const closeEditPopup = event => { 
  if (event.target !== event.currentTarget) return;   
  popupEditToggle(event.target);
}

// Обработчик формы 
const formEditSubmitHandler = (event) => {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;

  popupEditToggle(popupEdit);
}

// Функция для изначального заполнения значений полей формы
const fillValueForm = () => {
  nameInput.value = profileName.textContent;
  professionInput.value =  profileProfession.textContent;
  popupEditToggle(popupEdit);
}

popupEditOpenButton.addEventListener('click', fillValueForm);
popupEditCloseButton.addEventListener('click', popupEditToggle);
popupEdit.addEventListener('click', closeEditPopup);

popupEditForm.addEventListener('submit', formEditSubmitHandler); // Кнопка "Сохранить"

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
const gridPhotosContainer = document.querySelector('.grid-photos');

const renderInitialCards = (initialCards) => {
  initialCards.forEach(card => {
    const gridCardElement = gridCardTemplate.cloneNode(true);
    gridCardElement.querySelector('.grid-item__image').src = card.link;
    gridCardElement.querySelector('.grid-item__image').alt = card.name;
    gridCardElement.querySelector('.grid-item__name').textContent = card.name;

    gridPhotosContainer.append(gridCardElement);
    
  });
}
renderInitialCards(initialCards);

// ==Добавление карточки пользователем==
const popupAdd = document.querySelector('.popup_type_add')
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = popupAdd.querySelector('.popup__button-close');
const popupAddForm = popupAdd.querySelector('.popup__form');
const titleCardInput = popupAdd.querySelector('.popup__input_name_title-card');
const linkCardInput = popupAdd.querySelector('.popup__input_name_link-card');

const popupAddToggle = () => {
  popupAdd.classList.toggle('popup_opened');
}

const closeAddPopup = event => { 
  if (event.target !== event.currentTarget) return;   
  popupAddToggle(event.target);
}
// Генерация карточки от пользователя
const renderCard = (titleCard, linkCard) => {
  const gridCardElement = gridCardTemplate.cloneNode(true);
  const likeButton = gridCardElement.querySelector('.grid-item__like');
  const image = gridCardElement.querySelector('.grid-item__image')

  image.src = linkCard;
  image.alt = titleCard;
  gridCardElement.querySelector('.grid-item__name').textContent = titleCard;
  
  gridPhotosContainer.prepend(gridCardElement);

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('grid-item__like_liked');
  })

  image.addEventListener('click', function () {
    popupImageToggle(image);
    popupImage.src = image.src;
    popupImageTitle.textContent = image.alt;
  });
}

//Обработчик формы добавления карточки

const formAddSubmitHandler = (event) => {
  event.preventDefault();

  const titleCard = titleCardInput.value;
  const linkCard = linkCardInput.value;
  renderCard(titleCard, linkCard);
  popupAddToggle(popupAdd);
}
popupAddOpenButton.addEventListener('click', popupAddToggle);
popupAddCloseButton.addEventListener('click', popupAddToggle);
popupAdd.addEventListener('click', closeAddPopup);
popupAddForm.addEventListener('submit', formAddSubmitHandler);

// ==Лайкнуть карточку==
const likeButton = gridPhotosContainer.querySelectorAll('.grid-item__like');
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

// ==Попап увеличения картинки==
const gridPhotos = document.querySelectorAll('.grid-item__image');
const popupImageWrap = document.querySelector('.popup_type_image');
const popupImage = popupImageWrap.querySelector('.popup__image');
const popupImageTitle = popupImageWrap.querySelector('.popup__title-image');
const popupImageCloseButton = popupImageWrap.querySelector('.popup__button-close');

gridPhotos.forEach(image => {
  image.addEventListener('click', function () {
    popupImageToggle();
    popupImage.src = image.src;
    popupImageTitle.textContent = image.alt;
  });
})

const closeImagePopup = event => { 
  if (event.target !== event.currentTarget) return;   
  popupImageToggle();
}

const popupImageToggle = () => {
  popupImageWrap.classList.toggle('popup_opened');
}

popupImageWrap.addEventListener('click', closeImagePopup);
popupImageCloseButton.addEventListener('click', closeImagePopup);


