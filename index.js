//Объявление констант
const popupButtonOpen = document.querySelector(".header__section-menu-burger-button");
const popupContainer = document.querySelector(".popup");
const popupButtonClose = popupContainer.querySelector(".popup__close-button");

//Функция открытия попапа
function openPopup() {
    popupContainer.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);
}

//Функции закрытия попапа
function closePopup() {
    popupContainer.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened')
        closePopup(popupOpened);
    }
}

popupButtonOpen.addEventListener("click", openPopup);
popupButtonClose.addEventListener("click", closePopup);

