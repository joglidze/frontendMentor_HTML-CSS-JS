const shareBtn = document.querySelector(".share");
const mobShare = document.querySelector(".mob-share");
const shareBlock = document.querySelector(".flex");
let num = 0;

shareBtn.addEventListener("click", share);
mobShare.addEventListener("click", share);
function share() {
  if (num == 0) {
    shareBlock.style.display = "flex";
    num++;
  } else {
    shareBlock.style.display = "none";
    num--;
  }
}
