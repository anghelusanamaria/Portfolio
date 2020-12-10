const MENU_OPENED_CLASS = 'menu-opened';
const menuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  const isMenuClosed = nav.className.indexOf(MENU_OPENED_CLASS) === -1;
  if (isMenuClosed) {
    nav.classList.add(MENU_OPENED_CLASS);
  }
});

closeMenuBtn.addEventListener("click", () => {
  const isMenuOpened = nav.className.indexOf(MENU_OPENED_CLASS) !== -1;
  if (isMenuOpened) {
    nav.classList.remove(MENU_OPENED_CLASS);
  }
});