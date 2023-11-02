// JavaScript for capturing and displaying user input
document.addEventListener("DOMContentLoaded", function() {
    const inputForm = document.getElementById("user-input-form");
    const userInput = document.getElementById("user-input");
    const displayArea = document.getElementById("user-input-display");
  
    inputForm.addEventListener("submit", function(event) {
      event.preventDefault();
      displayArea.textContent = `You entered: ${userInput.value}`;
    });
  });

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function checkAvailability() {
    // Get user input
    const shoeSize = parseFloat(document.getElementById('shoeSize').value);
    const shoeColor = document.getElementById('shoeColor').value.trim().toLowerCase();
    const productCode = document.getElementById('productCode').value.trim();

    // Check availability logic (replace with your own logic)
    // You can check availability based on the input values and any data source.
    // For this example, we'll assume the product is available if the size is between 5 and 12.
    // You should modify this logic as per your requirements.
    if (shoeSize >= 5 && shoeSize <= 12) {
        document.getElementById('availabilityMessage').textContent = `Product ${productCode} in size ${shoeSize}, color ${shoeColor} is available.`;
    } else {
        document.getElementById('availabilityMessage').textContent = `Product ${productCode} in size ${shoeSize}, color ${shoeColor} is not available.`;
    }
}


