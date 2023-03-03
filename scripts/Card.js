import { popupZoom } from "../utils/constants.js";
import { openPopup } from "../utils/utils.js";
class Card {
  form = document.querySelector('.popup_type_modal');
  modalPicture;
  modalTitle;
  constructor(data, cardSelector) {
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
    openPopup(popupZoom)
    this.modalTitle = this.form.querySelector('.popup__picture-title');
    this.modalPicture = this.form.querySelector('.popup__picture');
    this.modalTitle.textContent = this._name;
    this.modalPicture.src = this._link;
    this.modalTitle.alt = this._name;
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
export { Card };