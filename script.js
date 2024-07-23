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
//&adding a class list to my hamburger menu to add a slide down animation in css

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
});
