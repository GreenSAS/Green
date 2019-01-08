function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("menuslide").style.display = "none";
  } else {
    x.className = "topnav";    
  }
}
