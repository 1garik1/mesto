import Popup from "./Popup.js";
class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__picture');
        this._popupImageName = this._popup.querySelector('.popup__picture-title');
    }
    open(imageLink, imageName) {

        this._popupImage.src = imageLink;
        this._popupImageName.textContent = imageName;
        this._popupImage.alt = imageName;
        super.open();
    }
}
export default PopupWithImage