const navBar = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");

let a = false;
hamburger.addEventListener("click", function () {
  if (!a) {
    navBar.style.visibility = "visible";
    a = true;
  } else {
    navBar.style.visibility = "hidden";
    a = false;
  }
});
