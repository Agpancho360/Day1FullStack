let signup = document.querySelector("#signupBtn");
let login = document.querySelector("#loginBtn");
let title = document.querySelector("#title");
let loginForm = document.querySelector(".login-form");
let signupForm = document.querySelector(".signup-form");

login.addEventListener("click", function () {
    title.innerText = "Log in";
    loginForm.style.display = "block";
    signupForm.style.display = "none";

})
signup.addEventListener("click", function () {
    title.innerText = "Sign Up";
    loginForm.style.display = "none";
    signupForm.style.display = "block";
})
