const input = document.getElementById("email");
const btn = document.querySelector(".submit");
const error = document.querySelector(".error");

const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
let value = input.value;
btn.addEventListener("click", (e) => {
  e.preventDefault();
  
    checkEmail()
});


function checkEmail(){
    if (!value.match(re)) {
    error.style.display = "block";
    
  } else {
    error.style.display = "none";

  }
}