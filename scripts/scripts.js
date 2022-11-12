const openModalBtn = document.querySelector(".profile__button");
const modal = document.querySelector(".modal");
const MODAL_ACTIVE_CLASS = "modal__active";
const modalContent = document.querySelector(".modal__text");
openModalBtn.addEventListener("click", () => {
    modal.classList.add(MODAL_ACTIVE_CLASS);
});

modal.addEventListener("click", (event) => {
    if(!modalContent.contains(event.target)) {
        modal.classList.remove(MODAL_ACTIVE_CLASS);
    }

})

let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__name");
let jobInput = document.querySelector(".form__job")
function formSubmitHandler (evt) {
    evt.preventDefault();
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__about');
profileName.textContent = nameInput.value;
profileJob.textContent = jobInput.value;

}
formElement.addEventListener('submit', formSubmitHandler);