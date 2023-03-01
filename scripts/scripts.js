import Card from './Card.js';
import FormValidator from './validate.js';
//задаем значения попапам
const popupProfile = document.querySelector('.popup_type_profile');//профиль
const popupPhoto = document.querySelector('.popup_type_photo');//картинки
const popupZoom = document.querySelector('.popup_type_modal');//zoom
//задаем значения кнопкам открытия попапов
const openModalBtn = document.querySelector('.profile__button');
const openSecondModalBtn = document.querySelector('.profile__add-button');
//задаем значения кнопкам закрытия попапов
const closeButtons = document.querySelectorAll('.popup__close');
// профилb
const nameInput = document.querySelector('.popup__input_type_name');//задаем инпут имени профиля
const jobInput = document.querySelector('.popup__input_type_job');//задаем инпут рода занятия профиля
const profileName = document.querySelector('.profile__name');//задаем обозначение имени профиля
const profileJob = document.querySelector('.profile__about');//задаем обозначение рода деятельности профиля
const formElementProfile = document.querySelector('.form_type_profile');//задаем форму
//контейнеры
const container = document.querySelector('.content');
const cardContainer = container.querySelector('.elements');

const formCards = document.querySelector('.form_type_photo');
const title = document.querySelector('.popup__input_type_title');
const image = document.querySelector('.popup__input_type_src');
//конфиг объект для валидации
const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__savebutton',
  inactiveBtnClass: 'popup__savebutton_disabled',
  inputErrorClass: 'form__input-error',
  errorClass: 'error',
};
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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

//функция закрытия попапа с помощью escape
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

//============================================================
//универсальные кнопки открытия/закрытия попапов
function openPopup(popup) {
  popup.classList.add('popup_active');

  document.addEventListener('keydown', closeByEscape);

};
function closePopup(popup) {
  popup.classList.remove('popup_active');

  document.removeEventListener('keydown', closeByEscape);
};
//функция закрытия попап черз escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup);
  };
};
const validateProfile = new FormValidator(config, formElementProfile);
const validatePhoto = new FormValidator(config, formCards);
validateProfile.enableValidation();
validatePhoto.enableValidation();

//============================================================
//обработчики событий
openModalBtn.addEventListener('click', editProfile);
openZoom.addEventListener('click', )
openSecondModalBtn.addEventListener('click', () => {
  openPopup(popupPhoto);
});
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

formElementProfile.addEventListener('submit', handleProfileFormSubmit);
formCards.addEventListener('submit', handleAddFormSubmit);
