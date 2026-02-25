// ❌ BROKEN VERSION — Common JavaScript Bugs

// Bug 1: Button click not working
// Error: Cannot read properties of null
document.getElementById("submitBtn").addEventListener(
  "click", function() {
  console.log("Button clicked");
});

// Bug 2: Form validation not triggering
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name == "") {
    alert("Name is required");
  }
  if (email == "") {
    alert("Email is required");
  }
  return true;
}

// Bug 3: Counter not updating on screen
var count = 0;

function incrementCounter() {
  count++;
  document.getElementById("counterDisplay").innerHTML 
  == count;
}

// Bug 4: Dropdown menu not toggling
function toggleMenu() {
  var menu = document.getElementById("dropdownMenu");
  if (menu.style.display = "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Bug 5: Price calculator returning NaN
function calculateTotal() {
  var price = document.getElementById("price").value;
  var quantity = document.getElementById(
    "quantity").value;
  var total = price * quantity;
  document.getElementById("total").innerHTML = 
  "Total: " + total;
}

// Bug 6: Scroll to top button not working
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200) {
    document.getElementById("scrollBtn").style.display 
    = "block";
  } else {
    document.getElementById("scrollBtn").style.display 
    = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
}

// Bug 7: Image slider not auto-advancing
var slideIndex = 1;

function autoSlide() {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  setTimeout(autoSlide, 2000);
}

// Bug 8: Local storage not saving user preference
function saveTheme(theme) {
  localStorage.setItem = ("userTheme", theme);
  applyTheme(theme);
}

function loadTheme() {
  var theme = localStorage.getItem("userTheme");
  if (theme) {
    applyTheme(theme);
  }
}
