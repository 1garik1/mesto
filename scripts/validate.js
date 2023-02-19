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
}
function handleFormInput (event, config) {
    const input = event.target;
    const inputId = input.id;
    console.log(inputId)
    const errorElement = document.querySelector(`#${inputId}-error`);
    console.log(errorElement)
    if(input.validity.valid) {
        input.classList.remove(config.errorClass);
        errorElement.textContent ='';
    } else {
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

/*const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input-error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input-error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};
//показ\скрытие ошибки

//проверка валидности
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
  } else {
    buttonElement.classList.remove('button_inactive');
  };
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__savebutton');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
      
    });
  });
};
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
    
  });
};
enableValidation();
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}*/