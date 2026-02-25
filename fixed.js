// ✅ FIXED VERSION — JavaScript Bug Fixes

// Fix 1: Button click not working
// Cause: Script running before DOM loaded,
// getElementById returning null
// Fix: Wrap in DOMContentLoaded event listener

document.addEventListener("DOMContentLoaded", 
function() {
  var submitBtn = document.getElementById("submitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function() {
      console.log("Button clicked");
    });
  }
});

// Fix 2: Form validation not triggering
// Cause: Function returned true even when fields
// were empty, allowing form to submit anyway
// Fix: Return false to block submission on error

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var isValid = true;

  if (name.trim() === "") {
    alert("Name is required");
    isValid = false;
  }

  if (email.trim() === "") {
    alert("Email is required");
    isValid = false;
  }

  return isValid; // blocks submit if false
}

// Fix 3: Counter not updating on screen
// Cause: == is comparison operator, not assignment
// innerHTML == count does nothing
// Fix: Use = assignment operator

var count = 0;

function incrementCounter() {
  count++;
  document.getElementById(
    "counterDisplay").innerHTML = count; // = not ==
}

// Fix 4: Dropdown menu not toggling
// Cause: if (menu.style.display = "block") uses
// assignment instead of comparison, always true
// Fix: Use === strict equality comparison

function toggleMenu() {
  var menu = document.getElementById("dropdownMenu");
  if (menu.style.display === "block") { // === not =
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Fix 5: Price calculator returning NaN
// Cause: .value returns a string, multiplying
// two strings produces NaN
// Fix: Parse values to numbers first

function calculateTotal() {
  var price = parseFloat(
    document.getElementById("price").value);
  var quantity = parseInt(
    document.getElementById("quantity").value);

  if (isNaN(price) || isNaN(quantity)) {
    document.getElementById("total").innerHTML = 
    "Please enter valid numbers";
    return;
  }

  var total = (price * quantity).toFixed(2);
  document.getElementById("total").innerHTML = 
  "Total: $" + total;
}

// Fix 6: Scroll to top button not working
// Cause: Only scrollTop was reset, not
// documentElement.scrollTop for modern browsers
// Fix: Reset both scrollTop properties

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || 
  document.documentElement.scrollTop > 200) {
    document.getElementById(
      "scrollBtn").style.display = "block";
  } else {
    document.getElementById(
      "scrollBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; // added
}

// Fix 7: Image slider not auto-advancing
// Cause: slides variable never defined,
// throws ReferenceError
// Fix: Properly select slides from DOM first

var slideIndex = 1;
var slides = document.getElementsByClassName("slide");

function autoSlide() {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }

  setTimeout(autoSlide, 2000);
}

// Fix 8: Local storage not saving user preference
// Cause: localStorage.setItem = () uses assignment
// instead of calling the method properly
// Fix: Use localStorage.setItem() as a function call

function saveTheme(theme) {
  localStorage.setItem("userTheme", theme); // () not =
  applyTheme(theme);
}

function loadTheme() {
  var theme = localStorage.getItem("userTheme");
  if (theme) {
    applyTheme(theme);
  }
}

function applyTheme(theme) {
  document.body.className = theme;
}
