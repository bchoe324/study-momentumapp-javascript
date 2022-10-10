const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const hidden_classname = "hidden";
const username_key = "username";

function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  loginForm.classList.add(hidden_classname);
  localStorage.setItem(username_key, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(hidden_classname);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(username_key);

if (!savedUsername) {
  loginForm.classList.remove(hidden_classname);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
