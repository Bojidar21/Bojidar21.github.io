
function menu() {
  var x = document.querySelector(".hamburger_nav");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.querySelector(".hamburger_nav").style.width = "0"
    document.querySelector("body").style.marginLeft = "0"

  } else {
    x.style.display = "block";
   document.querySelector(".hamburger_nav").style.width = "200px"
  }
}

function myFunction(x) {
  x.classList.toggle("change");
}