const settingsForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}
// Показать ошибку
const showInputError = (formSelector, inputSelector, errorMessage, {errorClass, inputErrorClass}) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

// скрыть ошибку
const hideInputError = (formSelector, inputSelector, {errorClass, inputErrorClass}) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

// Проверить валидность формы
const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage, settingsForm);
  } else {
    hideInputError(formSelector, inputSelector, settingsForm);
  }
}

// Проверка валидности поля
const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
}

// переключение disabled
const toggleButtonState = (inputList, submitButtonSelector, {inactiveButtonClass}) => {
  if (hasInvalidInput(inputList)) {
    submitButtonSelector.classList.add(inactiveButtonClass);
    submitButtonSelector.setAttribute('disabled', '');
  } else {
    submitButtonSelector.classList.remove(inactiveButtonClass);
    submitButtonSelector.removeAttribute('disabled', '');
  }
}

//Функция для навешивания событий на все формы
const setEventListeners = (form, {inputSelector, submitButtonSelector}) => {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const submitButton = form.querySelector(submitButtonSelector);

  toggleButtonState(inputList, submitButton, settingsForm);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', function () {

      checkInputValidity(form, inputSelector);
      toggleButtonState(inputList, submitButton, settingsForm);
    });
  });
}
// Валидация
const enableValidation = ({formSelector}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((item) => {
    item.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
    formList.forEach((item) => {
      setEventListeners(item, settingsForm);
    });
  });
}

// При вызове функция принимает объект настроек форм на странице
enableValidation(settingsForm);
