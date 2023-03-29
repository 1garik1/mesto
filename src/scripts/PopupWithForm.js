import Popup from "./Popup";
class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit){
        super (popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupType.querySelector('.form');
        this._inputList = this._popupType.querySelectorAll('.popup__input');
        
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;});
        return this._formValues;
    }
    getFormValues() {
        return this._getInputValues();
    }
    getFormElement() {
        return this._popupForm;
    }

    close() {
        this._popupForm.reset();
        super.close();
        
        
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => this._handleFormSubmit(evt));       
    }
}
export {PopupWithForm}
