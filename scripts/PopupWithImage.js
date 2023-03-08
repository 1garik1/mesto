import Popup from "./Popup.js";
class PopupWithImage extends Popup {
    constructor(popupSelector){
        super (popupSelector);
        this._popupImage = this._popupType.querySelector('.popup__picture');
        this._popupTitle = this._popupType.querySelector('.popup__picture-title')
    }
    open(name, link) {
        this._popupImage.src = link;
        this._popupTitle.textContent = name;
        this._popupImage.alt = name;   
    }
}
export default PopupWithImage