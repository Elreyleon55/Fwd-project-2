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

//settinf my media min width to a variable
const mediaQuery = window.matchMedia("(min-width: 31.25em)");

//function checks if mediaquery
function handleMediaQueryChange(mediaQuery) {
  //this cheks if the coniditon specified is true
  if (mediaQuery.matches) {
    console.log("the viewport is less then 500px");
    dropdownmeu.style.display = "block";
    // dropdownmeu.classList.toggle("open");
  } else {
    console.log("the viewport is more then 500px");
    dropdownmeu.style.display = "none";
    // dropdownmeu.classList.toggle("open");
  }
}
//adds a argument to the function
handleMediaQueryChange(mediaQuery);

///gets the veriable to litsen to changes and then ca;;s the function
mediaQuery.addEventListener("change", handleMediaQueryChange);
