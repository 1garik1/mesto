//создаем класс карточек
class Card {

    constructor(data, cardSelector){
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__element')
            .cloneNode(true);

        this._element = cardElement;
    }
    _setEventListeners() {
      this._element.querySelector('.elements__delete-btn').addEventListener('click', () => {
        this._handleCardDelete();
      })
      this._element.querySelector('.elements__button').addEventListener('click', () => {
        this._handleCardLike();
      });
      this._element.querySelector('.elements__image').addEventListener('click', () => {
        this._handlecardClick();
      })
    }
    //удаление
    _handleCardDelete() {
        this._element.remove();
    }

    //лайк
    _handleCardLike() {
      this._element.querySelector('.elements__button').classList.toggle('elements__button_active');
    }
    //попап для просмотра картинок
    _handlecardClick() {
        const popupZoom = document.querySelector('.popup_type_modal');
        function handleOverlay(evt) {
            const openedPopup = document.querySelector('.popup_active');
            if (openedPopup && evt.target === openedPopup) {
              closeZoom(openedPopup);
            };
          }
        function openZoom (popup) {
            popup.classList.add('popup_active');
            document.addEventListener('mousedown', handleOverlay);
           // document.addEventListener('keydown', closeZoomByEscape);
            
          };
        function closeZoom (popup) {
            popup.classList.remove('popup_active');
          
            document.removeEventListener('mousedown', handleOverlay);
           // document.removeEventListener('keydown', closeZoomByEscape);
           };

        openZoom(popupZoom)
        const mdlPicture = document.querySelector('.popup__picture');
        const mdlTitle = document.querySelector('.popup__picture-title');
        mdlTitle.textContent = this._name;
        mdlPicture.src = this._link;
    }
    
    generateCard() {
        this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__image').alt = this._name;
        this._element.querySelector('.elements__title').textContent = this._name;

        return this._element;
    };
  };
  export default Card;