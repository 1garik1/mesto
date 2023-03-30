import Popup from "./Popup.js";
class PopupWithImage extends Popup {
        constructor(popupSelector) {
        super(popupSelector)
        this._popupImage = this._popupType.querySelector('.popup__picture');
        this._popupTitle = this._popupType.querySelector('.popup__picture-title');
        }
    open(data) {
        this._popupImage.src = data.link;
        this._popupTitle.textContent = data.name;
        this._popupImage.alt = data.name; 
        super.open()  
    }
}
export default PopupWithImage