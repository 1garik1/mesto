class Card {
  constructor({ data, cardSelector, usersCard, handleCardClick, handleLikeCardClick, handleRemoveButtonClick }) {
    this._usersCard = usersCard;
    this._imageLink = data.link;
    this._imageName = data.name;
    this._name = data.name;
    this._likes = data.likes;
    this._cardId = data._id;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeCardClick = handleLikeCardClick;
    this._handleRemoveButtonClick = handleRemoveButtonClick;

  }
  _getTemplate() {
    return document.querySelector(this._cardSelector).content.querySelector('.elements__element').cloneNode(true);
  }
  _setEventListeners() {
    if (this._usersCard) {
      this._cardDelete.addEventListener('click', (evt) => {
        this._handleRemoveButtonClick(evt)
      })
    }

    this._cardLike.addEventListener('click', (evt) => this._handleLikeCardClick(evt));
    this._cardsElementImage.addEventListener('click', () => this._handleCardClick());
  }


  //лайк
  _toggleLikeState() {
    if (this._checkUserLike()) {
      this.setLike();
    } else {
      this.unsetLike();
    }
  }
  setLike() {
    this._cardLike.classList.add('elements__button_active');
    this.isLiked = true
  }
  unsetLike() {
    this._cardLike.classList.remove('elements__button_active');
    this.isLiked = false;
  }
  likesCounterUpdate(data) {
  return  this._countLikeElement.textContent = data.length;
  }
  _checkUserLike() {
    return this._likes.some((item) => item._id === this._usersCard);;
  }
  getCardId() {
    return this._cardId;
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._cardsElementImage = this._cardElement.querySelector('.elements__image');
    this._cardDelete = this._cardElement.querySelector('.elements__delete-btn');
    this._cardLike = this._cardElement.querySelector('.elements__button');
    if (!this._usersCard) {
      this._cardDelete.remove();
    }

    this._cardsElementImage.src = this._imageLink;
    this._cardsElementImage.alt = this._imageName;
    this._countLikeElement = this._cardElement.querySelector('.elements__counter-likes');
    this._countLikeElement.textContent = this._likes.length;

    this._cardElement.querySelector('.elements__title').textContent = this._name;

    this._toggleLikeState();
    this._setEventListeners();

    return this._cardElement;
  };
};
export default Card;