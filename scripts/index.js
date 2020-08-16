// @TODO Хочу сделать одну функцию по открытию и закрытию попапа, что бы на вход 
// принимала попап и понимала какой надо закрыть. Не получилось сделать такое, скореее всего
// надо закрытие/открытие переписать с toggle на 2 функции (открытия и закрытия) 

// ==Попап редактирования профиля==
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

const popupEdit = document.querySelector('.popup_type_edit')
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const popupEditForm = popupEdit.querySelector('.popup__form');
const nameInput = popupEdit.querySelector('.popup__input_name_name');
const professionInput = popupEdit.querySelector('.popup__input_name_profession');


// Функция открытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}
// Функция закрытия попапа
const closePopup = () => document.querySelector('.popup_opened').classList.remove('popup_opened');

// Закрытие попапа по клике на оверлей
const closePopupOverlay = event => { 
  if (event.target !== event.currentTarget) return;   
  closePopup(event.target);
}

// Обработчик формы редактирования профиля
const formEditSubmitHandler = (event) => {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;

  closePopup();
}


popupEditOpenButton.addEventListener('click', function() {
  openPopup(popupEdit);
  //При открытии запонляем форму текущими значениями
  nameInput.value = profileName.textContent;
  professionInput.value =  profileProfession.textContent;
});




popupEdit.addEventListener('click', closePopupOverlay);

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



// Генерация карточки от пользователя
const renderCard = (titleCard, linkCard) => {
  const gridCardElement = gridCardTemplate.cloneNode(true);
  const likeButton = gridCardElement.querySelector('.grid-item__like');
  const image = gridCardElement.querySelector('.grid-item__image')
  const deleteIcon = gridCardElement.querySelector('.grid-item__delete-icon')

  image.src = linkCard;
  image.alt = titleCard;
  gridCardElement.querySelector('.grid-item__name').textContent = titleCard;
  
  gridPhotosContainer.prepend(gridCardElement);

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('grid-item__like_liked');
  })

  image.addEventListener('click', function () {
    openPopup(popupImageWrap);
    popupImage.src = image.src;
    popupImageTitle.textContent = image.alt;
  });

  deleteIcon.addEventListener('click', function () {
    deleteIcon.closest('.grid-item').remove();
  });
}

//Обработчик формы добавления карточки

const formAddSubmitHandler = (event) => {
  event.preventDefault();

  const titleCard = titleCardInput.value;
  const linkCard = linkCardInput.value;
  renderCard(titleCard, linkCard);
  closePopup();
}
popupAddOpenButton.addEventListener('click', function() {
  openPopup(popupAdd);
})
popupAdd.addEventListener('click', closePopupOverlay);
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


gridPhotos.forEach(image => {
  image.addEventListener('click', function () {
    openPopup(popupImageWrap);
    popupImage.src = image.src;
    popupImageTitle.textContent = image.alt;
  });
})

popupImageWrap.addEventListener('click', closePopupOverlay);

// Навесить на все кнопки закрытия фукционал закрытия
popupCloseButtons.forEach(item => {
  item.addEventListener('click', closePopup);
})
