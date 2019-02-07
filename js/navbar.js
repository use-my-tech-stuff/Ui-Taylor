window.onscroll = function() {thisfuction()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
function thisFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 