// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.background = "#222a35";
    document.getElementById("logo").style.display = "block";
    document.getElementById("logo-white").style.display = "none";
  } else {
    document.getElementById("header").style.background = "transparent";
    document.getElementById("logo").style.display = "none";
    document.getElementById("logo-white").style.display = "block";
  }
}
