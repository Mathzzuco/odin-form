const subBtn = document.querySelector("button");

function checkpassword(e) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  if (password === confirmPassword) {
    document.getElementById("password_message").innerHTML = "";
  } else {
    e.preventDefault();
    document.getElementById("password_message").innerHTML =
      "* Passwords do not match";
  }
}

subBtn.addEventListener("click", checkpassword);
