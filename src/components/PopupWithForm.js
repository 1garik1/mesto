import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.form');
        this._inputList = this._formElement.querySelectorAll('.popup__input');

    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    getFormElement() {
        return this._formElement;
    }
    setEventListeners() {
        this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault(); 
        this._handleFormSubmit(this._getInputValues());
    });
        super.setEventListeners();
    }
    close() {
        this._formElement.reset();
        super.close();
    }
}
export { PopupWithForm }
