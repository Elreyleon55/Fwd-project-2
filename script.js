//connection check
console.log("hello I am connected");

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
});
