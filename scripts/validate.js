class FormValidator {
  constructor (conf, _formEl){
    this._inputSelector = conf._inputSelector;
    this._submitBtnSelector = conf._submitBtnSelector;
    this._inactiveBtnClass = conf._inactiveBtnClass;
    this._inputErrorClass = conf._inputErrorClass;
    this._errorClass = conf._errorClass;
    this._formEl = conf._formEl;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._btnElement = this._formElement.querySelector(this._submitBtnSelector);
  }
  _showInputError = (inputElement, errorMessage) => {
    const _errorEl = this._formEl.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    _errorEl.classList.add(this._errorClass);
    _errorEl.textContent = errorMessage;
  }
  _hideInputError = (inputElement) => {
    const _errorEl = this._formEl.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    _errorEl.classList.remove(this._errorClass);
    _errorEl.textContent = '';
  }
  _hasInvalidInput () {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  toggleButtonState () {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.setAtribute('disabled', true);
      this._buttonElement.classList.add(this._inactiveBtnClass);
    } else {
      this._buttonElement.removeAtribute('disabled');
      this._buttonElement.classList.remove(this._inactiveBtnClass);
    }
  }
  _setEventListeners () {
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.value
      ? this._checkInputValidity(inputElement)
      : '';

    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this.toggleButtonState();

    })
    })
  }
  hideInputErrors() {
    this._inputList.forEach(input => this._inactiveBtnClass);
  }
  enableValidation() {
    this._formEl.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
  
}
export default FormValidator
