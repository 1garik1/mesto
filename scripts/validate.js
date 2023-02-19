const formValidationConfig = {
    formSelector: '.form',
    inputSelector: '.popup__input',
    errorClass: 'form__input-error',
    buttonSelector: '.popup__savebutton',
    buttonDesabledClass: 'popup__savebutton_disabled',
};

function disableSubmit(event) {
  event.preventDefault();
};

function enableValidation (config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', disableSubmit);
    form.addEventListener('input', () => {
      toggleButtonState(form, config);
    });
    addInputListeners(form, config);
    toggleButtonState(form, config);
    });
};
function handleFormInput (event, config) {
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);
    if (input.validity.valid) {
      input.classList.remove(config.errorClass);
      errorElement.textContent ='';
    } 
    else {
      input.classList.add(config.errorClass);
      errorElement.textContent = input.validationMessage;
    }
};

function toggleButtonState (form, config) {
const buttonSubmit = form.querySelector(config.buttonSelector);
const isFormValid = form.checkValidity();

buttonSubmit.disabled = !isFormValid;
buttonSubmit.classList.toggle('popup__savebutton_disabled', !isFormValid);
};

function addInputListeners (form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);
    inputList.forEach(function (item) {
      item.addEventListener('input', (event) =>{
          handleFormInput(event, config);
      });
  });
};
enableValidation(formValidationConfig);
