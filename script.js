const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

let a = false;
hamburger.addEventListener("click", function () {
  if (!a) {
    menu.style.visibility = "visible";
    a = true;
  } else {
    menu.style.visibility = "hidden";
    a = false;
  }
});
