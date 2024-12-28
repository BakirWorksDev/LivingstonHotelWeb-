const burgerBtn = document.querySelector(".burger");
const burgerNav = document.querySelector(".navigation");
const closeNav = document.querySelector(".header__no_content");
// функционал навигации Header
const toggleNav = () => {
  burgerBtn.classList.toggle("active");
  burgerNav.classList.toggle("navigation__open");
};
if (burgerBtn && burgerNav) {
  burgerBtn.addEventListener("click", toggleNav);
}
if (closeNav && burgerNav) closeNav.addEventListener("click", toggleNav);
