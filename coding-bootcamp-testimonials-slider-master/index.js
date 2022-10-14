const mainCont = document.querySelector(".main-cont");
const btn = document.querySelectorAll(".btn");

const picture = document.querySelector(".main-img");
const paragraph = document.querySelector("p");
const secSlide = document.querySelector(".main-cont2");



btn.forEach((button) => {
  button.addEventListener("click", () => {
    mainCont.classList.toggle("display");
    
  });
});
