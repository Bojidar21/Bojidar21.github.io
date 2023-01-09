function menu() {
  var x = document.querySelector(".hamburger_nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos>currentScrollPos) {
    document.querySelector("header").style.top = "0";
    document.querySelector(".mobile_header").style.top ="0"
  } else {
    document.querySelector("header").style.top = "-85px"
    document.querySelector(".mobile_header").style.top ="-400px"
  }
  prevScrollpos = currentScrollPos;
}

function myFunction(x) {
  x.classList.toggle("change");
}