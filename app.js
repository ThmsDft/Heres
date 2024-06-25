let logo = document.querySelector("#logo");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    logo.classList.remove("top");
    header.classList.remove("top");
  } else {
    logo.classList.add("top");
    header.classList.add("top");
  }
});

let buttonRDV = document.querySelector("section.home a");
setTimeout(function () {
  buttonRDV.classList.add("animation");
}, 1500);

let img = document.querySelector("section.home img");
setTimeout(function () {
  img.classList.add("animation");
}, 1000);


let burger = document.querySelector("#burger");
let blur = document.querySelector(".blur");
let menu = document.querySelector(".menu");

burger.addEventListener("click", function (event) {
  event.preventDefault();
  blur.classList.add("active");
  menu.classList.add("active");
  document.body.classList.add('no-scroll');
});

let closeButton = document.querySelector("#close");

closeButton.addEventListener("click", function () {
  blur.classList.remove("active");
  menu.classList.remove("active");
  document.body.classList.remove('no-scroll');
});