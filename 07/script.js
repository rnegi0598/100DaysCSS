const menu = document.querySelector(".menu");
const front = document.querySelector(".front");
const searchIcon = document.querySelector(".search-icon");
const search = document.querySelector(".search");
const title = document.querySelector(".title");
menu.addEventListener("click", () => {
  console.log("menu clicked");
  front.classList.toggle("move");
});

searchIcon.addEventListener("click", () => {
  title.classList.toggle("hide");
  menu.classList.toggle("hide");
  search.classList.toggle("hide");
});
