function menu() {
  var x = document.querySelector(".hamburger_nav");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.querySelector(".hamburger_nav").style.width = "0"
    document.querySelector("body").style.marginLeft = "0"
    document.body.style.backgroundColor = "white"

  } else {
    x.style.display = "block";
    document.querySelector(".hamburger_nav").style.width = "250px";
    document.querySelector("body").style.marginLeft = "250px"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos>currentScrollPos) {
    document.querySelector(".desktop_header").style.top = "0";
    document.querySelector(".mobile_header").style.top = "0";

  } else {
    document.querySelector(".desktop_header").style.top = "-85px"
    document.querySelector(".mobile_header").style.top = "-85px"
  }
  prevScrollpos = currentScrollPos;
}

function myFunction(x) {
  x.classList.toggle("change");
}
let toTopButton = document.getElementById("top_button")


function GoToTop() {
 document.body,screenTop = 0
 document.documentElement.scrollTop = 0
}