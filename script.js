const loginForm = document.querySelector(".inputs-container"); // Target the form container
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const loginButton = document.querySelector(".login-btn");

function validateForm() {
  // Email Validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailInput.value.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Password Validation
  if (passwordInput.value.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  // If all checks pass
  return true;
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    // If validation passes, submit the form here
    // You'll likely want to use AJAX or a traditional
    // form submission to send the data to your server.
    alert("Form Submitted (Replace this with actual submission logic)");
  }
});