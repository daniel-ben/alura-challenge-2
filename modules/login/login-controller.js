import getGitUser from "./getGitUser.js";

function loginController() {
  const login_form = document.querySelector("[data-login-form]");

  login_form.addEventListener("submit", onSubmit);
}

// ##########  Need refactoring ##########
// Look for the difference between controller, service, util, etc and distribute functions accordingly

function onSubmit(event) {
  event.preventDefault();

  const username = document.querySelector("[data-login-username]").value;
  if (!username) return alert("Please enter a username");

  getGitUser(username)
    .then((user) => storeUser(user))
    .then(() => (window.location.href = "/"));
}

function getGitUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((response) =>
    validateUser(response)
  );
}

function validateUser(response) {
  if (response.status == 404) {
    alert("User not found");
    throw new Error("User not found");
  } else {
    return response.json();
  }
}

function storeUser(user) {
  const currentUser = {
    username: user.name,
    photourl: `https://github.com/${user.login}.png?size=32`,
  };
  sessionStorage.setItem("user", JSON.stringify(currentUser));
}

loginController();
