const inputPassword = document.querySelectorAll('input[type="password"]');

function checkpassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  if (password != "" && confirmPassword != "") {
    if (password === confirmPassword) {
      document.getElementById("password_message").innerHTML = "";
      document.getElementById("password").setCustomValidity("");
      document.getElementById("confirm_password").setCustomValidity("");
    } else {
      document
        .getElementById("password")
        .setCustomValidity("Passwords do not match");
      document
        .getElementById("confirm_password")
        .setCustomValidity("Passwords do not match");
      document.getElementById("password_message").innerHTML =
        "* Passwords do not match";
    }
  }
}

inputPassword.forEach((e) => {
  e.addEventListener("input", checkpassword);
});
