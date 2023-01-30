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

const container = document.querySelector('.content');
const cardContainer = container.querySelector('.elements');
const formCards = document.querySelector('.form__type_photo');
let initialCards = [
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
const cardTemplate = document.querySelector('#elements-template').content;
console.log(cardTemplate);
const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
cardElement.querySelector('.elements__title').textContent= element.name;
cardElement.querySelector('.elements__image').src = element.link;
cardElement.querySelector('.elements__button').addEventListener('click', function (evt) {
  evt.target.classList.toggle('elements__button_active');
});
cardContainer.append(cardElement);


});
console.log(initialCards);
//===============================================
const titleInput = document.querySelector('.popup__input_type_title');
const cardInput = document.querySelector('.popup__input_type_src');


function addCard (nameValue, linkValue) {

  const cardTemplate = document.querySelector('#elements-template').content;
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
  cardElement.querySelector('.elements__title').textContent = nameValue;
  cardElement.querySelector('.elements__image').src = linkValue;
  cardElement.querySelector('.elements__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__button_active');
    });
  cardContainer.prepend(cardElement);
}


function formSubmitionHandler (evt) {
  evt.preventDefault();
  const title = document.querySelector('.popup__input_type_title');
  const image = document.querySelector('.popup__input_type_src');
  addCard(title.value, image.value);
  title.value = '';
  image.value = '';
popupPhoto.classList.remove(MODAL_ACTIVE_CLASS);//закрытие попапа после изменения профиля на кнопку сабмит
};
//================================================



function openModal () {
  popupProfile.classList.add(MODAL_ACTIVE_CLASS);
};

function closeModal (event) {
  if(!modalContent.contains(event.ModalCloseBtn)) {
    popupProfile.classList.remove(MODAL_ACTIVE_CLASS);
    }
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupProfile.classList.remove(MODAL_ACTIVE_CLASS);//закрытие попапа после изменения профиля на кнопку сабмит
  console.log('sadsadsfafd');

};
//==================================================
function openSecondModal () {
  popupPhoto.classList.add(MODAL_ACTIVE_CLASS);
};

function closeSecondModal () {
  const titleInput = document.querySelector('.popup__input_type_title').value;
  const cardInput = document.querySelector('.popup__input_type_src').value;
  popupPhoto.classList.remove(MODAL_ACTIVE_CLASS);
};


//===========================================================
openModalBtn.addEventListener('click', openModal);
closeProfileButton.addEventListener('click', closeModal);
formElementProfile.addEventListener('submit', formSubmitHandler);

openSecondModalBtn.addEventListener('click', openSecondModal);
closePhotoButton.addEventListener('click', closeSecondModal);
formCards.addEventListener('submit', formSubmitionHandler);