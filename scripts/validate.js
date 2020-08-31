const formEditProfileElement = document.querySelector('form[name="addCard"]');

const formAddCardElement = document.querySelector('form[name="editProfile"]');

// Показать ошибку
const showInputError = (formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
}
// скрыть ошибку
const hideInputError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
}
// Проверить валидность формы
const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideInputError(formSelector, inputSelector);
  }
}
// Проверка валидности поля
const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
}
// переключение disabled
const toggleButtonState = (inputList, submitButtonSelector) => {
  if (hasInvalidInput(inputList)) {
    submitButtonSelector.classList.add('popup__button-save_inactive');
  } else {
    submitButtonSelector.classList.remove('popup__button-save_inactive');
  }
}

const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
  const submitButtonSelector = formSelector.querySelector('.popup__button-save');

  toggleButtonState(inputList, submitButtonSelector);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', function () {

      checkInputValidity(formSelector, inputSelector);
      toggleButtonState(inputList, submitButtonSelector);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
    formList.forEach((form) => {
    setEventListeners(form);
    });
  });
};

// При вызове функция принимает объект настрое форм на странице
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});
