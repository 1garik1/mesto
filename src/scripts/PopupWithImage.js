import Popup from "./Popup.js";
class PopupWithImage extends Popup {
        _popupImage = this._popupType.querySelector('.popup__picture');
        _popupTitle = this._popupType.querySelector('.popup__picture-title');
   
    open(imageLink, imageName) {
        this._popupImage.src = imageLink;
        this._popupTitle.textContent = imageName;
        this._popupImage.alt = imageName; 
        super.open()  
    }
}
export default PopupWithImage