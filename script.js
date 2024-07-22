//connection check
console.log("hello I am connected");

<<<<<<< HEAD
//declarrying my variables

const hamburgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".main-navigation-mobile-section");

menu.style.display = "block";

console.log(hamburgerMenu);

hamburgerMenu.addEventListener("click", () => {
  if (menu.style.display === "style") {
  }

  menu.style.display === "block" ? "none" : "block";
  console.log("click is going trough");
=======
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector("hamburger");
  const menu = document.querySelector("main-navigation-mobile-section");

  hamburgerMenu.addEventListener("click", () => {
    menu.style.display = menu.style.display = "block";
  });
>>>>>>> fad02cc (chaching it up)
});
