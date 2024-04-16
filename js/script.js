const subBtn = document.querySelector("button");

function checkpassword(e) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  if (password === confirmPassword) {
    console.log(password);
    console.log(confirmPassword);
    document.getElementById("password_message").innerHTML = "";
    alert("batata");
  } else {
    e.preventDefault();
    console.log(password);
    console.log(confirmPassword);
    document.getElementById("password_message").innerHTML =
      "* Passwords do not match";
    alert("cenoura");
  }
}

subBtn.addEventListener("click", checkpassword);
