
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

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(window.innerWidth > 640){

  if (prevScrollpos>currentScrollPos) {
    document.querySelector(".desktop_header").style.top = "0"
  

  } else {
    document.querySelector(".desktop_header").style.top = "-85px"
    
  }
  

  }
  //else{
    //if (prevScrollpos>currentScrollPos) {
      document.querySelector(".mobile_header").style.top = "0"
  
   }//else {
    //document.querySelector(".mobile_header").style.top = "-85px"
  // }
 //}
 //prevScrollpos = currentScrollPos;
//}

function myFunction(x) {
  x.classList.toggle("change");
}
