// Grab the elements using the exact matched IDs and classes from above
const hamburgerBtn = document.getElementById("hamberger-btn");
const navMenu = document.querySelector(".nav-links");
const menu = document.getElementById("menu-burger");

// Add the click logic
hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  if (navMenu.classList.contains("active")) {
    menu.classList = "fa-solid fa-x";
  } else {
    menu.classList = "fa-solid fa-bars";
  }
});
