console.log("I am connected");

const hamburgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".main-navigation-mobile-section");

menu.style.display = "block";

console.log(hamburgerMenu);

hamburgerMenu.addEventListener("click", () => {
  dropdownmeu.style.display =
    dropdownmeu.style.display === "block" ? "none" : "block";
  if (dropdownmeu.style.display === "block") {
    dropdownmeu.classList.toggle("open");
    console.log("the first one");
  } else {
    dropdownmeu.classList.toggle("open");
    console.log("the second one");
  }
  console.log(dropdownmeu);
  console.log("new save");
});
