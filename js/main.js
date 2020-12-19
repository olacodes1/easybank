let nav = document.querySelector(".nav-overlay");
let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".icon");
// console.log(nav);

menu.addEventListener("click", function () {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("bg-change");
});
