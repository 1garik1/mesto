
class Card {

  constructor({data, cardSelector, handleCardClick}) {
    this.data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    
  }
  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__element')
      .cloneNode(true);
    return this._element;
  
  }
  _setEventListeners() {
    this._element.querySelector('.elements__delete-btn').addEventListener('click', () => {
      this._handleCardDelete();
    })
    this._element.querySelector('.elements__button').addEventListener('click', () => {
      this._handleCardLike();
    });
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._handlecardClick(this.name, this.link);
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
  
  _generateElement(image) {
    image = this._element.querySelector('.elements__image');
    image.src = this._link;
    image.alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;
    return this._element;
  }
  generateCard() {

    this._getTemplate();
    this._setEventListeners();

    return this._generateElement();
  };
};
export default Card;