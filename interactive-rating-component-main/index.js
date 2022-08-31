const keys = document.querySelectorAll(".key");
const submit = document.querySelector(".submit-btn");
const firstCont = document.querySelector(".main-cont");
const secCont = document.querySelector(".sec-cont");

const error = document.querySelector(".dis");
const small = document.querySelector("small");

let number = 0;
keys.forEach((rate) => {
  rate.addEventListener("click", () => {
    number = rate.innerHTML;
    small.innerHTML = `You selected Add rating here out ${number} of 5`;
    return number;
  });
});

// keys.addEventListener("click",rate)

submit.addEventListener("click", display);

function display() {
  if (number > 0) {
    firstCont.classList.add("dis");
    secCont.classList.remove("dis");
  } else {
    error.classList.remove("dis");
  }
}
