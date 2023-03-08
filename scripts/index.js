
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import {initialCards, popupPhoto, popupProfile, openModalBtn,
  openSecondModalBtn, closeButtons, nameInput, jobInput,
  profileName, profileJob, formElementProfile, /*popupZoom,*/
  cardContainer, formCards, title, image, config} from '../utils/constants.js';
//import { openPopup, closePopup} from '../utils/utils.js';
import { PopupWithForm } from './PopupWithForm.js';
//открфтие самой карточки
const modalZoom = new PopupWithImage('.popup_type_modal');
//создаем карточку
function createCard(item){
  const card = new Card(
    item, '#elements-template',
    (data) => {
      modalZoom.open(data);
    }
)
  const cardElement = card.generateCard();
  return cardElement;
}
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
const AddFormSubmit = new PopupWithForm ({
  popupSelector: popupPhoto,
  handleFormSubmit: (item) => {
    createCard(item);
    AddFormSubmit.close();
    cardList.addItem(createCard(item));
  },
  });
  AddFormSubmit.setEventListeners();
  
//сохранение изменений и добавление новой карточки
/*function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const data = {};
  data.name = title.value;
  data.link = image.value;
  const newCard = createCard(data);
  cardContainer.prepend(newCard);
  formCards.reset();
  validatePhoto.toggleButtonState();
  closePopup(popupPhoto);
};*/

//изменение профиля
/*function editProfile() {
  const openPopup = new PopupWithForm(popup_type_profile, );
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  validateProfile.hideInputErrors();
};
//сохранение изменений профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupProfile);
};*/

//валидация форм
const validateProfile = new FormValidator(config, formElementProfile);
const validatePhoto = new FormValidator(config, formCards);
validateProfile.enableValidation();
validatePhoto.enableValidation();

//обработчики событий


openSecondModalBtn.addEventListener('click', () => {
  AddFormSubmit.open();
  validatePhoto.toggleButtonState();
});

/*
formElementProfile.addEventListener('submit', handleProfileFormSubmit);
formCards.addEventListener('submit', handleAddFormSubmit);

//все кнопки закрытия(универсальная функция)
closeButtons.forEach((button) => {

  const popup = button.closest('.popup');
  button.addEventListener('click', () => {
    closePopup(popup);
  });
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    };
  });
})*/