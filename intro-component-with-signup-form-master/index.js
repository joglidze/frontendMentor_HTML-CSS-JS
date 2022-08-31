const btn = document.getElementsByClassName("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const img = document.getElementsByClassName("img");
const form = document.getElementById("form");

let regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

console.log();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let fName = firstName.value;
  let lName = lastName.value;

  if (fName == "") {
    img[0].classList.add("error");
    firstName.parentNode.querySelector("small").innerText =
      "First Name cannot be empty";

    firstName.style.borderColor = "var(--red)";
    firstName.style.borderWidth = "5px";
  }

  if (lName == "") {
    img[1].classList.add("error");
    lastName.parentNode.querySelector("small").innerText =
      "Last name cannot be empty";

    lastName.style.borderColor = "var(--red)";
    lastName.style.borderWidth = "5px";
  }

  if (email.value == "") {
    img[2].classList.add("error");
    email.parentNode.querySelector("small").innerText = "Email cannot be empty";

    email.style.borderColor = "var(--red)";
    email.style.borderWidth = "5px";
  }

  if (email.value.match(regex)) {
    email.parentNode.querySelector("small").innerText = "";
  } else {
    email.parentNode.querySelector("small").innerText =
      "Looks like this is not email";

    email.style.borderColor = "var(--red)";
  }

  if (password.value == "") {
    img[3].classList.add("error");

    password.parentNode.querySelector("small").innerText =
      "Password cannot be empty";

    password.style.borderColor = "var(--red)";
    password.style.borderWidth = "5px";
  }
});
