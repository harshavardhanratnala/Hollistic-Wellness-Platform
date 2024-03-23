document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const dashboard = document.getElementById("dashboard");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your login logic here
    dashboard.classList.remove("hidden");
    loginForm.reset();
  });

  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your registration logic here
    dashboard.classList.remove("hidden");
    registerForm.reset();
  });
});
