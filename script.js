//test
console.log("I am connected");

<<<<<<< HEAD
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
=======
//getting variables

const hamburgerMenu = document.querySelector(".hamburger");

const dropdownmeu = document.querySelector(".main-navigation-mobile-section");

//test
console.log(dropdownmeu);
console.log(hamburgerMenu);

//setting defualt styles of dropdown

dropdownmeu.style.display = "none";

//getting on click on button and changing styles

hamburgerMenu.addEventListener("click", () => {
  dropdownmeu.style.display =
    dropdownmeu.style.display === "block" ? "none" : "block";
>>>>>>> a409a14 (javascrip works)
});
