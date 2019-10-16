import "../scss/main.scss";

const menu = document.querySelector(".fa");
const body = document.querySelector("body");

// add menu active to body so we can see the menu
menu.addEventListener("click", function(e) {
  body.classList.add("menu-active");
  e.preventDefault;
});
