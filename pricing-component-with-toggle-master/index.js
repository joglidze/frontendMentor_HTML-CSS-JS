const input = document.querySelector("#toggle");
const annually = document.querySelectorAll(".annually");
const monthly = document.querySelectorAll(".monthly");
input.addEventListener("change", (e) => {
  if (e.target.checked) { 
    annually.forEach((target) => {
        target.style.display='none';
      });
    monthly.forEach((target) => {
      target.style.display='block';
     
    });
   

  } else { 
   
        annually.forEach((target) => {
            target.style.display='block';
          });
        monthly.forEach((target) => {
          target.style.display='none';
         
        });
   
  
   
  }
});
