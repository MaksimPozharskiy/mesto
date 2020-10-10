export default class FormValidator {
  constructor(settingsForm, formElement) {
    this.formSelector = settingsForm.formSelector;
    this._inputSelector = settingsForm.inputSelector;
    this._submitButtonSelector = settingsForm.submitButtonSelector
    this._inactiveButtonClass = settingsForm.inactiveButtonClass
    this._inputErrorClass = settingsForm.inputErrorClass
    this._promptErrorSelector = settingsForm.promptErrorSelector
    this._errorClass = settingsForm.errorClass
    this._formElement = formElement;
  }
  // Показать ошибку
  _showInputError(inputSelector, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }
  // скрыть ошибку
  _hideInputError(inputSelector) {
    const errorElement = this._formElement.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }
  // Проверить валидность формы 
  _checkInputValidity(inputSelector) {
    if (!inputSelector.validity.valid) {
      this._showInputError(inputSelector, inputSelector.validationMessage);
    } else {
      this._hideInputError(inputSelector);
    }
  }
  // Проверка валидности поля
  _hasInvalidInput(inputList) {
    return inputList.some((inputSelector) => {
      return !inputSelector.validity.valid;
    });
  }
  // переключение disabled
  _toggleButtonState(inputList, submitButtonSelector) {
    if (this._hasInvalidInput(inputList)) {
      submitButtonSelector.classList.add(this._inactiveButtonClass);
      submitButtonSelector.setAttribute('disabled', '');
    } else {
      submitButtonSelector.classList.remove(this._inactiveButtonClass);
      submitButtonSelector.removeAttribute('disabled', '');
    }
  }
  //Функция для навешивания событий на все формы
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const submitButton = this._formElement.querySelector(this._submitButtonSelector);
  
    this._toggleButtonState(inputList, submitButton);
  
    inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', () => {
        this._checkInputValidity(inputSelector);
        this._toggleButtonState(inputList, submitButton);
      });
    });
    
  }
  // Переключение кнопок джля сброса формы
  _checkSubmitButton() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, submitButton);
  }

  //Функция для сброса формы
  resetForm() {
    const promtList = Array.from(this._formElement.querySelectorAll(this._promptErrorSelector));
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    promtList.forEach((item) => {
      item.textContent = "";
      item.classList.remove(this._errorClass);
    });
    inputList.forEach((item) => {
      item.classList.remove(this._inputErrorClass);
    })
    this._formElement.reset();
    this._checkSubmitButton();
}
  // Валидация
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
    
    this._setEventListeners();
  }
}