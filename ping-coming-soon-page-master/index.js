const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const error = document.querySelector(".error");
const input = document.querySelector("#email");
const btn = document.querySelector(".submit-btn");
input.innerText;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.match(regex)) {
    error.innerHTML = "";
    input.classList.remove("input-error");
  } else {
    error.innerHTML = "Please provide valid email adress";
    input.classList.add("input-error");
  }
});
