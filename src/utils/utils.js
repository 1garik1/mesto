//универсальные кнопки открытия/закрытия попапов
function openPopup(popup) {
    popup.classList.add('popup_active');

    document.addEventListener('keydown', closeByEscape);

};
function closePopup(popup) {
    popup.classList.remove('popup_active');

    document.removeEventListener('keydown', closeByEscape);
};
//функция закрытия попап черз escape
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_active');
        closePopup(openedPopup);
    };
};
export { openPopup, closePopup, closeByEscape };