const eye = document.getElementById("eye");
const password = document.getElementById("password");

console.log(eye);
eye.addEventListener("click", () => {
  if (password.type === "password") {
    eye.setAttribute("src", "./assets/img/eye-slash-regular.svg");
    password.type = "text";
  } else {
    eye.setAttribute("src", "./assets/img/eye-regular.svg");
    password.type = "password";
  }
});
