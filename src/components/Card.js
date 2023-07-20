class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._imageName = data.name;
    this._name = data.name;
    this._imageLink = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._element.querySelector('.elements__delete-btn').addEventListener('click', (evt) => {
      this._handleCardDelete(evt);
    })
    this._element.querySelector('.elements__button').addEventListener('click', (evt) => {
      this._handleCardLike(evt);
    });
    this._element.querySelector('.elements__image').addEventListener('click', (evt) => {
      this._handleCardClick(evt);
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
    image.src = this._imageLink;
    image.alt = this._imageName;
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