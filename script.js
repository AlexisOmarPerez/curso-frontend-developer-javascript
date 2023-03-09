const navAccountMenu = document.querySelector(".desktop-menu");
const menuEmail = document.querySelector(".navbar-email");

menuEmail.addEventListener("click", function () {
  navAccountMenu.classList.toggle("hideUnhide");
});
