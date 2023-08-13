import './index.css'
import {
  popupProfileSelector, popupPhoto, openModalBtn,
  openSecondModalBtn, cardSelector,
  profileName, profileJob, formElementProfile, popupZoom,
  cardContainer, formCards, config, profileAvatar, popupChangeAvatar, profileAvatarEditButton,
  popupConfirmSelector, avatarForm
} from '../utils/constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import Api from '../components/Api';
import PopupWithConfirm from '../components/PopupWithConfirm';
import { data } from 'autoprefixer';
//api + токен
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-72/',
  headers: {
    authorization: 'cc9224db-b3d0-4df0-a276-203050427490',
    'Content-Type': 'application/json',
  },
});
//информация профиля
const userInfo = new UserInfo({ profileName, profileJob, profileAvatar })
//на этом моменте пока работает
api.getPageNeedData().then((responses) => {
  const [cardData, profileData] = responses;
  userInfo.setUserInfo({ userName: profileData.name, userAbout: profileData.about });
  userInfo.setUserAvatar({ userAvatarLink: profileData.avatar });
  userInfo.saveUserId(profileData._id);
  cards.renderItems(cardData);
})
  .catch((err) => {
    console.log(err)
  });
//зум карточек
const popupViewer = new PopupWithImage(popupZoom);
popupViewer.setEventListeners();
//добавление карточек
const cards = new Section({
  renderer: (item) => {
    const cardElement = createNewCard(item, cardSelector);
    cards.addItem(cardElement);
  },
}, cardContainer);
//изменение аватара профиля с последующей отправкой на сервер
const popupUpdateAvatar = new PopupWithForm(popupChangeAvatar, (evt) => {
  evt.preventDefault();
  popupUpdateAvatar.renderLoading(true);
  const formValues = popupUpdateAvatar.getFormValues();
  api.updateProfileAvatar({ avatar: formValues.src }).then((data) => {
    userInfo.setUserAvatar({ userAvatarLink: data.avatar });
    popupUpdateAvatar.close();
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    popupUpdateAvatar.renderLoading(false);
  });
});
popupUpdateAvatar.setEventListeners();
document.querySelector(profileAvatarEditButton).addEventListener('click', () => {
  popupUpdateAvatar.open();
  popupUpdateAvatarValidator.toggleButtonState();
});
// создание попапа для редактирования имени
const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  popupProfile.renderLoading(true);
  const formValues = popupProfile.getFormValues();
  api.updateUserInfo({ name: formValues.Name, about: formValues.About }).then((data) => {
    userInfo.setUserInfo({ userName: data.name, userAbout: data.about });
    popupProfile.close();
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    popupProfile.renderLoading(false);
  });
});
popupProfile.setEventListeners();
//подтверждение удаления карточки
const popupConfirm = new PopupWithConfirm(popupConfirmSelector);
popupConfirm.setEventListener();
//добавление карточки
const popupNewPhoto = new PopupWithForm(popupPhoto, (evt) => {
  evt.preventDefault();
  popupNewPhoto.renderLoading(true);
  const formValues = popupNewPhoto.getFormValues();
  const item = { name: formValues.name, link: formValues.url };
  api.addNewCard(item).then((newCardItem) => {
    const cardElement = createNewCard(newCardItem, cardSelector);
    cards.addNewItem(cardElement);
    popupNewPhoto.close();
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    popupNewPhoto.renderLoading(false);
  }); 
});
popupNewPhoto.setEventListeners();
//валидация форм
const popupUpdateAvatarValidator = new FormValidator(config, avatarForm);
const validateProfile = new FormValidator(config, formElementProfile);
const validatePhoto = new FormValidator(config, formCards);
validateProfile.enableValidation();
validatePhoto.enableValidation();
popupUpdateAvatarValidator.enableValidation();
//обработчики событий
openModalBtn.addEventListener('click', () => {
  const getUserInfo = userInfo.getUserInfo();
  const profileForm = popupProfile.getFormElement();
  profileForm.elements.userName.value = getUserInfo.userName;
  profileForm.elements.userAbout.value = getUserInfo.userAbout;
  popupProfile.open();
})
openSecondModalBtn.addEventListener('click', () => {
  validatePhoto.toggleButtonState();
  popupNewPhoto.open();
});
//функция создания карточки
function createNewCard(item, cardSelector) {
  //само создание карточки
  const card = new Card({
    data: item, userId: userInfo.getUserId(), cardSelector,
    handleCardClick: () => {
      popupViewer.open(item.link, item.name);
    },
    //параметр счетчика лайков   
    handleLikeCardClick: () => {
      if (card.isLiked) {
        api.deleteCardLike(card.getCardId()).then((data) => {
          card.unsetLike();
          card.updateCounterLikes(data.likes);//увеличить лайк при нажатии на +1 в случае клика на иконку сердечка
        }).catch((err) => {
          console.log(err);
        });
      } else {
        api.addCardLike(card.getCardId()).then((data) => {
          card.setLike();
          card.updateCounterLikes(data.likes);//после снятия кликом актиации лайка -1
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    //иконка корзинки, удаляющей карточки при клике
    handleRemoveButtonClick: () => {
      const cardId = card.getCardId();
      popupConfirm.changeHandleFormSubmit((evt) => {
        evt.preventDefault();
        api.removeCard(cardId).then(() => {
          popupConfirm.close();
          card.removeCard();
        }).catch((err) => {
          console.error(err);
        });
      });
      popupConfirm.open();// в случае удаления всплывает попап подтверждения удаления
    },
  });
  return card.generateCard()
}