const openModalBtn = document.querySelector(".profile__button"); 
const modal = document.querySelector(".popup");
const MODAL_ACTIVE_CLASS = "popup_active";
const modalContent = document.querySelector(".popup__text");
const ModalCloseBtn = document.querySelector(".popup__close");
let formElement = document.querySelector(".form");
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__about')
openModalBtn.addEventListener("click", () => {
    modal.classList.add(MODAL_ACTIVE_CLASS);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

});


ModalCloseBtn.addEventListener("click", (event) => {
  if(!modalContent.contains(event.ModalCloseBtn)) {

    modal.classList.remove(MODAL_ACTIVE_CLASS);
    }
})


modal.addEventListener("click", (event) => {
  if(!modalContent.contains(event.target)) {
    modal.classList.remove(MODAL_ACTIVE_CLASS);
  }

}) 

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  modal.classList.remove(MODAL_ACTIVE_CLASS);//закрытие попапа
}
formElement.addEventListener('submit', formSubmitHandler);//сохраняем значения согласно функции