//задаем значения попапам
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');//профиль
const popupPhoto = document.querySelector('.popup_type_photo');//картинки
const popupZoom = document.querySelector('.popup_type_modal');//zoom
//задаем значения кнопкам открытия попапов
const openModalBtn = document.querySelector('.profile__button');
const openSecondModalBtn = document.querySelector('.profile__add-button');
const picturesOpen = document.querySelector('.elements__image');
//задаем значения кнопкам закрытия попапов
const closeButtons = document.querySelectorAll('.popup__close');

const nameInput = document.querySelector('.popup__input_type_name');//задаем инпут имени профиля
const jobInput = document.querySelector('.popup__input_type_job');//задаем инпут рода занятия профиля
const profileName = document.querySelector('.profile__name');//задаем обозначение имени профиля
const profileJob = document.querySelector('.profile__about');//задаем обозначение рода деятельности профиля

const MODAL_ACTIVE_CLASS = 'popup_active';//задаем активное состояние попапа
const modalContent = document.querySelector('.popup__text');//задаем весь контент попапа
const formElementProfile = document.querySelector('.form_type_profile');//задаем форму

const container = document.querySelector('.content');
const cardContainer = container.querySelector('.elements');
const formCards = document.querySelector('.form_type_photo');
const dltBtn = document.querySelector('.elements__delete-btn');
const mdlPicture = document.querySelector('.popup__picture');
const mdlTitle = document.querySelector('.popup__picture-title');
const cardTemplate = document.querySelector('#elements-template').content;
const title = document.querySelector('.popup__input_type_title');
const image = document.querySelector('.popup__input_type_src');

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
//функция добавления карточки
initialCards.forEach((element) => {
 addCard(element.name, element.link);
});
//функция создания карточки
function createCard (name, link) {
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
  cardElement.querySelector('.elements__title').textContent = name;
  cardElement.querySelector('.elements__image').src = link;
  cardElement.querySelector('.elements__image').alt = name;
//лайк картинки
  cardElement.querySelector('.elements__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__button_active');
      });
//удаление картинки
cardElement.querySelector('.elements__delete-btn').addEventListener('click', function () {
  cardElement.remove();
});
//функция увеличения картинки при нажати на нее
function openZoom () {
  openPopup(popupZoom);
  mdlTitle.textContent = cardElement.querySelector('.elements__title').textContent;
  mdlPicture.src = cardElement.querySelector('.elements__image').src;
  mdlPicture.alt = cardElement.querySelector('.elements__image').alt;
};
//обработчик события увеличения картинки при нажатии
cardElement.querySelector('.elements__image').addEventListener('click', openZoom);
return cardElement
};
//фукнкция добавления карточки
function addCard (name, link){
  const cardElement = createCard(name, link);
  cardContainer.prepend(cardElement);
};
//универсальные кнопки открытия/закрытия попапов
function openPopup (popup) {
  popup.classList.add(MODAL_ACTIVE_CLASS);
};
function closePopup (popup) {
  popup.classList.remove(MODAL_ACTIVE_CLASS);
 };
 function keyHandler(evt){
  if (evt.key === 'Escape') {
      closePopup()
      };
};
//изменение профиля
function editProfile () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};
//сохранение изменений профиля
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
};
//сохранение изменений и добавление карточки
function handleAddFormSubmit (evt) {
  evt.preventDefault();
  addCard(title.value, image.value);
  title.value = ' ';
  image.value = ' ';
 closePopup(popupPhoto);
};
//обработчики событий
openModalBtn.addEventListener('click', editProfile);
openSecondModalBtn.addEventListener('click', () => { openPopup(popupPhoto) });
//все кнопки закрытия(универсальная функция)
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => {closePopup(popup)});
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
     };
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closePopup(popup);
    };
    });
});
formElementProfile.addEventListener('submit', handleProfileFormSubmit);
formCards.addEventListener('submit', handleAddFormSubmit);