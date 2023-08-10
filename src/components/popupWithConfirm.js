import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.form');
  }

  setEventListener() {
    this._formElement.addEventListener('submit', (evt) => this._handleFormSubmit(evt));
    super.setEventListeners();
  }

  changeHandleFormSubmit(submitAction) {
    this._handleFormSubmit = submitAction;
  }
}