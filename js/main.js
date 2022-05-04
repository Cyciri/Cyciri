// Dark mode

const btn = document.querySelector(".form-check-input");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.querySelector("nav").classList.toggle("navbar-light");
  document.querySelector("nav").classList.toggle("navbar-dark");
  document.querySelector(".btn-pho").classList.toggle("btn-dark");
  document.querySelector(".btn-pho").classList.toggle("btn-light");
  document.querySelector(".btn-kottu").classList.toggle("btn-dark");
  document.querySelector(".btn-kottu").classList.toggle("btn-light");
  document.querySelector(".btn-tagine").classList.toggle("btn-dark");
  document.querySelector(".btn-tagine").classList.toggle("btn-light");
  document.querySelector(".separetion-1").classList.toggle("bg-dark");
  document.querySelector(".separetion-1").classList.toggle("bg-light");
  document.querySelector(".separetion-2").classList.toggle("bg-dark");
  document.querySelector(".separetion-2").classList.toggle("bg-light");
  document.querySelector(".separetion-3").classList.toggle("bg-dark");
  document.querySelector(".separetion-3").classList.toggle("bg-light");
  document.querySelector(".separetion-4").classList.toggle("bg-dark");
  document.querySelector(".separetion-4").classList.toggle("bg-light");
  document.querySelector(".separetion-5").classList.toggle("bg-dark");
  document.querySelector(".separetion-5").classList.toggle("bg-light");
});
