//test
console.log("I am connected");

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
});
