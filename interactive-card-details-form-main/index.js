const form = document.querySelector("form");
const complete = document.querySelector(".complete");

const cardNumber = document.querySelector("#number");
const onCardNumber = document.querySelector(".oncardnumber");

const nameCard = document.querySelector(".namecard");
const nameOnCard = document.querySelector(".nameoncard");

const mmDate = document.querySelector(".mm");
const mmOnCard = document.querySelector(".mmoncard");

const yyDate = document.querySelector(".yyoncard");
const yyOnCard = document.querySelector(".onCardyy");

const cvcNumber = document.querySelector(".cvcnumber");
const cvcONCard = document.querySelector(".oncard");

const btn = document.querySelector("button");

const numErrMsg = document.querySelector(".num-msg");
const mmErrMsg = document.querySelector(".exp-msg");
const cvcErrMsg = document.querySelector(".cvc-msg");

let checked1 = true;

/*put info on card*/
nameCard.addEventListener("input", () => {
  let cardVal = nameCard.value;

  nameOnCard.innerText = `${cardVal.toUpperCase()}`;
});

cardNumber.addEventListener("input", () => {
  let val = cardNumber.value;

  onCardNumber.innerHTML = `${val}`;
});

mmDate.addEventListener("input", () => {
  let mmVal = mmDate.value;
  mmOnCard.innerText = `${mmVal}`;
});

yyDate.addEventListener("input", () => {
  let yyVal = yyDate.value;
  yyOnCard.innerText = `${yyVal}`;
});

cvcNumber.addEventListener("input", () => {
  let cvcVal = cvcNumber.value;
  cvcONCard.innerText = `${cvcVal}`;
});

/*add btn listener and check data */

btn.addEventListener("click", (e) => {
  let number = [...cardNumber.value];

  number.forEach((num) => {
    let num2 = num - 1;

    if (num2 >= 0 || num2 < 0) {
      numErrMsg.style.display = "none";
    } else {
      numErrMsg.style.display = "block";
      checked1 = false;
    }
  });

  let number2 = mmDate.value;

  if (number2 === "") {
    mmErrMsg.style.display = "block";
    checked1 = false;
  } else {
    mmErrMsg.style.display = "none";
  }

  let number4 = cvcNumber.value;

  if (number4 === "") {
    cvcErrMsg.style.display = "block";
    checked1 = false;
  } else {
    cvcErrMsg.style.display = "none";
  }

  if (checked1) {
    e.preventDefault();
    form.style.display = "none";
    complete.style.display = "flex";
  }
});
