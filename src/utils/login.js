import { login } from "../../api/controller/loginController.js";

const login_form = document.querySelector("[data-login-form]");
login_form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const username = document.querySelector("[data-login-username]").value;
  login(username);
}

