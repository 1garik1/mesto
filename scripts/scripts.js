const openModalBtn = document.querySelector(".profile__button");//задаем кнопку открытия
const modal = document.querySelector(".popup");//задаем попап
const MODAL_ACTIVE_CLASS = "popup_active";//задаем активное состояние попапа
const modalContent = document.querySelector(".popup__text");//задаем весь контент попапа
const ModalCloseBtn = document.querySelector(".popup__close");//задаем кнопку закрытия
let formElement = document.querySelector(".form");//задаем форму
let nameInput = document.querySelector('.popup__input_type_name');//задаем инпут имени профиля
let jobInput = document.querySelector('.popup__input_type_job');//задаем инпут рода занятия профиля
let profileName = document.querySelector('.profile__name');//задаем обозначение имени профиля
let profileJob = document.querySelector('.profile__about');//задаем обозначение рода деятельности профиля
openModalBtn.addEventListener("click", () => {
    modal.classList.add(MODAL_ACTIVE_CLASS);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

});//открытие попапа и внесение данных профиля в инпуты


ModalCloseBtn.addEventListener("click", (event) => {
  if(!modalContent.contains(event.ModalCloseBtn)) {
    modal.classList.remove(MODAL_ACTIVE_CLASS);
    }
})//закрытие попапа через кнопку закрытия


modal.addEventListener("click", (event) => {
  if(!modalContent.contains(event.target)) {
    modal.classList.remove(MODAL_ACTIVE_CLASS);
  }

})//закрытие попапа по клику вне попапа

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  modal.classList.remove(MODAL_ACTIVE_CLASS);//закрытие попапа после изменения профиля на кнопку сабмит
}
formElement.addEventListener('submit', formSubmitHandler);//сохраняем значения согласно функции