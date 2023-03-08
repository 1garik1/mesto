class Popup {
    constructor(popupSelector) {
        this._popupType = document.querySelector(popupSelector);
        this._closeButtton = this._popupType.querySelector('.popup__close');
        this._escapeClose = this._handleEscClose.bind(this);
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        };
    }
   
    open(){
        this._popupType.classList.add('popup_active');

        document.addEventListener('keydown', this._escapeClose);
    }
    close(){
        this._popupType.classList.remove('popup_active');

        document.addEventListener('keydown', this._escapeClose);
    }
    setEventListeners(){
        this._popupType.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
        });
        this._closeButtton.addEventListener('click', () => {
            this.close();
        })
    }
}
export default Popup