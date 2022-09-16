const btn = document.querySelectorAll(".display-li");




btn.forEach((button) => {
  button.addEventListener("click", () => {
    
   let change = button.parentNode.querySelector('.answer').classList.toggle('dis');
        
   return change

  });
});
