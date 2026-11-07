//This shi absolutely does nothing, in-line comment
/* multi line
comment*/

const navBtn = document.getElementById("btn_1");
const navMenu = document.querySelector(".nav_bar_menu");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

const filterBtn = document.querySelector(".filters1Button");
const filterSystem = document.querySelector(".Filtersystem");

filterBtn.addEventListener("click", () => {
  filterSystem.classList.toggle("open");
});
