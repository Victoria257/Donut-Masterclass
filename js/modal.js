const modalBtn = document.querySelector(".header__button");
const modalMenu = document.querySelector(".header__modal");
const iconMenu = document.querySelector(".icon-menu");
const iconClose = document.querySelector(".icon-close");

modalBtn.addEventListener("click", openModalMenu);

function openModalMenu() {
    modalMenu.classList.toggle("visually-hidden");
    iconMenu.classList.toggle("visually-hidden");
    iconClose.classList.toggle("visually-hidden")
}
