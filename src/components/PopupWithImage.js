import Popup from "./Popup.js";
class PopupWithImage extends Popup {
    _popupImage = this._popup.querySelector('.popup__picture'); 
        
    open(imageLink, imageName) {
       
        this._popupImage.src = imageLink;
        this._popup.querySelector('.popup__picture-title').textContent = imageName;
        this._popupImage.alt = imageName; 
        super.open();
    }
}
export default PopupWithImage