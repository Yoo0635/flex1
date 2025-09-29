//nav_bar.js
const toggleBtn = document.querySelector(".navbar-toggleBtn");
const menu = document.querySelector(".navbar-menu");
const icons = document.querySelector(".navbar-icons");

toggleBtn.addEventListener("click", () => {
  //active 클래스가 있으면 제거하고, 없으며 추가
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
