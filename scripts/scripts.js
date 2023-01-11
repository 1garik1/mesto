//задаем значения попапам
const popupProfile = document.querySelector('.popup__type_profile');//профиль
const popupPhoto = document.querySelector('.popup__type_photo');//картинки

//задаем значения кнопкам открытия попапов
const openModalBtn = document.querySelector('.profile__button');
const openSecondModalBtn = document.querySelector('.profile__add-button');

//задаем значения кнопкам закрытия попапов
const closeProfileButton = popupProfile.querySelector('.popup__close');
const closePhotoButton = popupPhoto.querySelector('.popup__close');

const nameInput = document.querySelector('.popup__input_type_name');//задаем инпут имени профиля
const jobInput = document.querySelector('.popup__input_type_job');//задаем инпут рода занятия профиля
const profileName = document.querySelector('.profile__name');//задаем обозначение имени профиля
const profileJob = document.querySelector('.profile__about');//задаем обозначение рода деятельности профиля

const MODAL_ACTIVE_CLASS = 'popup_active';//задаем активное состояние попапа
const modalContent = document.querySelector('.popup__text');//задаем весь контент попапа
const formElementProfile = document.querySelector('.form');//задаем форму




const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');


openModalBtn.addEventListener("click", () => {
    popupProfile.classList.add(MODAL_ACTIVE_CLASS);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;



});//открытие попапа и внесение данных профиля в инпуты


closeProfileButton.addEventListener("click", (event) => {
  if(!modalContent.contains(event.ModalCloseBtn)) {
    popupProfile.classList.remove(MODAL_ACTIVE_CLASS);
    }
})//закрытие попапа через кнопку закрытия


modalContent.addEventListener("click", (event) => {
  if(!modalContent.contains(event.target)) {
    popupProfile.classList.remove(MODAL_ACTIVE_CLASS);
  }

})//закрытие попапа по клику вне попапа

openSecondModalBtn.addEventListener("click", () => {
  popupPhoto.classList.add(MODAL_ACTIVE_CLASS);




});
closePhotoButton.addEventListener('click', () => {
  popupPhoto.classList.remove(MODAL_ACTIVE_CLASS);
})
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  modal.classList.remove(MODAL_ACTIVE_CLASS);//закрытие попапа после изменения профиля на кнопку сабмит
}
formElementProfile.addEventListener('submit', formSubmitHandler);//сохраняем значения согласно функции


const cardList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.elements-template').content;
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

initialCards.forEach(function (element){
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.elements__image').src = element.link;
  cardElement.querySelector('.elements__title').textContent = element.name;
  cardList.append(cardElement);
})