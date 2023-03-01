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
    }
    //удаление
    _handleCardDelete() {
        this._element.remove();
    }

    //лайк
    _handleCardLike() {
      this._element.querySelector('.elements__button').classList.toggle('elements__button_active');
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