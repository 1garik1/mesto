import '../pages/index.css'

import {initialCards, popupProfileSelector, popupPhoto,openModalBtn,
  openSecondModalBtn, closeButtons, nameInput, jobInput,
  profileName, profileJob, formElementProfile, popupZoom,
  cardContainer, formCards, title, image, config} from '../utils/constants.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import {PopupWithForm} from './PopupWithForm.js';

//открфтие самой карточки

const userInfo = new UserInfo({profileName, profileJob});

//создаем карточку
function createCard(item){
  const card = new Card(
    item, '#elements-template', handleCardClick);
    return card.generateCard();
}
function handleCardClick(imageLink, text) {
  modalZoom.open(imageLink, text);
}
const modalZoom = new PopupWithImage(popupZoom);
modalZoom.setEventListeners();

//добавление карточек

const cardList = new Section({
  data: initialCards,
  renderer: (item) => { 
      createCard(item);
     cardList.addItem(createCard(item));
  }
 }, cardContainer);

cardList.renderItems();

// создание попапа для добавления карточек
const popupProfile = new PopupWithForm (
  popupProfileSelector, (evt) => {
    evt.preventDefault();
    const formValues = popupProfile.getFormValues();
    userInfo.setUserInfo({userName: formValues.title, userAbout: formValues.subtitle});
    popupProfile.close()
  });
popupProfile.setEventListeners();

const popupNewPhoto = new PopupWithForm (popupPhoto, (evt) => {
  evt.preventDefault();
  const formValues = popupNewPhoto.getFormValues();
  const item = {name: formValues.name, link: formValues.url};
  const cardElement = createCard(item);
  cardList.addItem(cardElement);
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
  const userInfoData = userInfo.getUserInfo();
  const profileForm = popupProfile.getFormElement();
  profileForm.elements.name.value = userInfoData.userName;
  profileForm.elements.about.value = userInfoData.userAbout;
  validateProfile.enableValidation();
  popupProfile.open();
})

openSecondModalBtn.addEventListener('click', () => {
  popupNewPhoto.open();
  validatePhoto.toggleButtonState();
});
