

const errorMessage=document.querySelector("label");
const btn=document.getElementById("btn");
const input=document.querySelector("input")
const para=document.querySelector(".movep")

btn.addEventListener("click",validate);

function validate(e){
    
    const value=input.value
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    errorMessage.classList.remove("form");
    para.classList.remove("form");

    if(value===""){
        errorMessage.classList.remove("form");
        para.classList.remove("form");
    }else if(value===validRegex){
        errorMessage.classList.remove("form");
        para.classList.remove("form");
    }
}