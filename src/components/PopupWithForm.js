import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.form');
        this._inputList = this._formElement.querySelectorAll('.popup__input');
        this._formElementSubmitButton = this._formElement.querySelector('.popup__savebutton')
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    getFormValues() {
        return this._getInputValues();
    }
    getFormElement() {
        return this._formElement;
    }
    setEventListeners() {
        this._formElement.addEventListener('submit', (evt) =>  this._handleFormSubmit(evt));
        super.setEventListeners();
    }
    renderLoading(isLoading) {
        if (isLoading === true) {
            this._formElementSubmitButton.textContent = 'Сохранение...';
        } else {
            this._formElementSubmitButton.textContent = 'Сохранить';
        }
    }
    close() {
        this._formElement.reset();
        super.close();
    }
}
export { PopupWithForm }
