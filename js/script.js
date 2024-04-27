const inputPassword = document.querySelectorAll('input[type="password"]');

function checkpassword(e) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  if (password != "" && confirmPassword != "") {
    if (password === confirmPassword) {
      document.getElementById("password_message").innerHTML = "&nbsp";
      document.getElementById("password").setCustomValidity("");
      document.getElementById("confirm_password").setCustomValidity("");
    } else {
      document.getElementById("password").setCustomValidity("invalid");
      document.getElementById("confirm_password").setCustomValidity("invalid");
      e.preventDefault();
      document.getElementById("password_message").innerHTML =
        "* Passwords do not match";
    }
  }
}

inputPassword.forEach((e) => {
  e.addEventListener("input", checkpassword);
});
