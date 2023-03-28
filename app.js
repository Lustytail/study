const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `User name is ${userName}`;
}  
  

loginForm.addEventListener("submit", loginSubmit);