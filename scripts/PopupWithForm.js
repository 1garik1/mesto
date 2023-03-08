import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}){
        super (popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupType.querySelector('.popup');
        this._submitButton = this._popupType.querySelector('.popup__savebutton[type="submit"]');
    }
    _getInputValues() {
        this._inputList = this._popupType.querySelectorAll('.popup__input')
        this._formValues = {};
        this._inputList.forEach((input) => (this._formValues[input.name] = input.value, this));
        return this._formValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupType.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }
    close() {
        //this._popupForm.reset();
        super.close();
        
        
    }
}
export {PopupWithForm}