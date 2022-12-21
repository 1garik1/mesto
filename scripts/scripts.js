const openModalBtn = document.querySelector(".profile__button"); //задаем кнопку редактирования пользователя
const modal = document.querySelector(".modal");//задаем всплывающее окно
const MODAL_ACTIVE_CLASS = "modal_active";//задаем открытое состояние всплывающего окна
const modalContent = document.querySelector(".modal__text");//задаем данные всплывающего окна(общие)
const ModalCloseBtn = document.querySelector(".modal__close");//задаем кнопку закрытия всплывающего окна
openModalBtn.addEventListener("click", () => {
    modal.classList.add(MODAL_ACTIVE_CLASS);
});//действие открытия всплывающего окна, после этого .modal становится видимым
ModalCloseBtn.addEventListener("click", (event) => {
    if(!modalContent.contains(event.ModalCloseBtn)) {
        modal.classList.remove(MODAL_ACTIVE_CLASS);
    }
})//задаем действие кнопке закрытия всплывающего окна
modal.addEventListener("click", (event) => {
    if(!modalContent.contains(event.target)) {
        modal.classList.remove(MODAL_ACTIVE_CLASS);
    }

}) // задаем действие, закрывающее всплывающее окно по клику вне модального окна

let formElement = document.querySelector(".form");//задаем общую форму
let nameInput = document.querySelector(".form__name");//задаем строку 'name'
let jobInput = document.querySelector(".form__job");//задаем строку 'job'
function formSubmitHandler (evt) {
    evt.preventDefault();
let profileName = document.querySelector('.profile__name');//строка ввода name
let profileJob = document.querySelector('.profile__about');//строка воода job
profileName.textContent = nameInput.value;
profileJob.textContent = jobInput.value;

}//задаем функцию отправки на сервер и редактирования профиля
formElement.addEventListener('submit', formSubmitHandler);//сохраняем значения согласно функции