//connection check
console.log("hello I am connected");

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector("hamburger");
  const menu = document.querySelector("main-navigation-mobile-section");

  hamburgerMenu.addEventListener("click", () => {
    menu.style.display = menu.style.display = "block";
  });
});
