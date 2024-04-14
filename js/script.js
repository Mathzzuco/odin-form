const subBtn = document.querySelector("button");

function checkpassword() {
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirm_password").value;
  if (password === confirmpassword) {
    console.log(password);
    console.log(confirmpassword);
    alert("batata");
  } else {
    console.log(password);
    console.log(confirmpassword);
    alert("cenoura");
  }
}

subBtn.addEventListener("click", checkpassword);
