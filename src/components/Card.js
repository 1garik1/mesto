class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._imageName = data.name;
    this._name = data.name;
    this._imageLink = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__element')
      .cloneNode(true);
  }
  _setEventListeners() {
    this._cardElement.querySelector('.elements__delete-btn').addEventListener('click', (evt) => {
      this._handleCardDelete(evt);
    })
    this._cardElement.querySelector('.elements__button').addEventListener('click', (evt) => {
      this._handleCardLike(evt);
    });
    this._cardElement.querySelector('.elements__image').addEventListener('click', (evt) => {
      this._handleCardClick(evt);
    })
  }
  //удаление
  _handleCardDelete() {
    this._cardElement.remove();
  }
  //лайк
  _handleCardLike() {
    this._cardElement.querySelector('.elements__button').classList.toggle('elements__button_active');
  }
  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardsElementImage = this._cardElement.querySelector('.elements__image');
    this._setEventListeners();
    this._cardsElementImage.src = this._imageLink;
    this._cardsElementImage.alt = this._imageName;
    this._cardElement.querySelector('.elements__title').textContent = this._name;
    return this._cardElement;
  };
};
export default Card;