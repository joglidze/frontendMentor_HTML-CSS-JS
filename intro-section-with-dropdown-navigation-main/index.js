const btn = document.querySelectorAll(".target");
const feature = document.querySelectorAll(".feature");
const openMenu = document.querySelector(".icon-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const droppedOpt = document.querySelectorAll(".dropped-option");

const mainCont = document.querySelector(".main-cont");

const mobileBtn = document.querySelectorAll(".btn");

btn.forEach((target) => {
  target.addEventListener("click", () => {
    if (target.innerText == "Features ") {
      feature[0].classList.toggle("display");
    } else if (target.innerText == "Company ") {
      feature[1].classList.toggle("display");
    }
  });
});

//mobile eventlistenrr

openMenu.addEventListener("click", () => {
  mainCont.style.filter = "blur(8px)";

  mobileMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  mainCont.style.filter = "blur(0px)";
  mobileMenu.style.display = "none";
});

mobileBtn.forEach((target) => {
  target.addEventListener("click", () => {
    if (target.innerText == "Features") {
      for (let i = 0; i <= 3; i++) {
        droppedOpt[i].classList.toggle("dropped-option");
      }
    } else if (target.innerText == "Company") {
      for (let i = 4; i <= 7; i++) {
        droppedOpt[i].classList.toggle("dropped-option");
      }
    }
  });
});
