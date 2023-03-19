// Make nav bar responsive for mobile phone
@media only screen and (max-width: 600px) {
  .navbar {
    display: none;
  }
}

// Make nav bar visible when toggle is clicked
function toggleNav() {
  var x = document.getElementById("navbar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Make web page margin relative to other elements
body {
  margin: 0;
  padding: 0;
}