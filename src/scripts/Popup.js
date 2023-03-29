class Popup {
    constructor(popupSelector) {
        this._popupType = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
   
    open(){
        this.classList.add('popup_active');

        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this.classList.remove('popup_active');

        document.addEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        };
    }
    setEventListeners(){
        this._popupType.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_active')){
                this.close();
            }
            if (evt.target.classList.contains('popup__close')) {
                this.close();
            }
            })  
        }
}
export default Popup