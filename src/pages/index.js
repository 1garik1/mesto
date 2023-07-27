import './index.css'

import {
  initialCards, popupProfileSelector, popupPhoto, openModalBtn,
  openSecondModalBtn, nameInput, jobInput, cardSelector,
  profileName, profileJob, formElementProfile, popupZoom,
  cardContainer, formCards, config,
} from '../utils/constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

//информация профиля
const userInfo = new UserInfo({ profileName, profileJob })
//зум карточек
const popupPhotos = new PopupWithImage(popupZoom);
popupPhotos.setEventListeners();
//создаем карточку
function createNewCard(item, cardSelector) {
  const card = new Card(item, cardSelector, () => {
    popupPhotos.open(item.link, item.name);
  });
  return card.generateCard();
}
//добавление карточек
const cards = new Section({
  items: initialCards, renderer: (item) => {
    const cardElement = createNewCard(item, cardSelector);
    cards.addItem(cardElement);
  },
}, cardContainer);
cards.renderItems();
// создание попапа для редактирования имени
const popupProfile = new PopupWithForm(popupProfileSelector, () => {
  const formValues = popupProfile._getInputValues();
  userInfo.setUserInfo({ userName: formValues.Name, userAbout: formValues.About });
  popupProfile.close();
});
popupProfile.setEventListeners();
//добавление карточки
const popupNewPhoto = new PopupWithForm(popupPhoto, () => {
  const formValues = popupNewPhoto._getInputValues();
  const item = { name: formValues.placeName, link: formValues.placeLink };
  const cardElement = createNewCard(item, cardSelector);
  cards.addItem(cardElement);
  popupNewPhoto.close();
}
)
popupNewPhoto.setEventListeners();
//валидация форм
const validateProfile = new FormValidator(config, formElementProfile);
const validatePhoto = new FormValidator(config, formCards);
validateProfile.enableValidation();
validatePhoto.enableValidation();
//обработчики событий
openModalBtn.addEventListener('click', () => {
  const getUserInfo = userInfo.getUserInfo();
  const profileForm = popupProfile.getFormElement();
  profileForm.elements.userName.value = getUserInfo.userName;
  profileForm.elements.userAbout.value = getUserInfo.userAbout;
  popupProfile.open();
})
openSecondModalBtn.addEventListener('click', () => {
  validatePhoto.toggleButtonState();
  popupNewPhoto.open();
});
