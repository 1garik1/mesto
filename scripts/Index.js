import {Card} from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards, popupPhoto, popupProfile, openModalBtn,
  openSecondModalBtn, closeButtons, nameInput, jobInput,
  profileName, profileJob, formElementProfile, container,
  cardContainer, formCards, title, image, config} from '../utils/constants.js';
import { openPopup, closePopup} from './openClose.js';

//создаем карточку
function createCard(item) {
  const card = new Card(item, '#elements-template');
  return card.generateCard();
};
//перебираем массив initialCards
initialCards.forEach((item) => {
  const cardElement = createCard(item);
  cardContainer.append(cardElement);
});

//сохранение изменений и добавление новой карточки
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const data = {};
  data.name = title.value;
  data.link = image.value;
  const newCard = createCard(data);
  cardContainer.prepend(newCard);
  formCards.reset();
  validatePhoto.toggleButtonState();
  closePopup(popupPhoto);
};

//изменение профиля
function editProfile() {
  openPopup(popupProfile);
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
};

//валидация форм
const validateProfile = new FormValidator(config, formElementProfile);
const validatePhoto = new FormValidator(config, formCards);
validateProfile.enableValidation();
validatePhoto.enableValidation();

//обработчики событий
openModalBtn.addEventListener('click', editProfile);
openSecondModalBtn.addEventListener('click', () => {
  openPopup(popupPhoto);
});
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
})
