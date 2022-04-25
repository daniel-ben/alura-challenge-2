import { addNewCode } from "./addNewCode.js";
import { getPageId } from "./getPageId.js";
import { updateCode } from "./updateCode.js";

const form = document.querySelector("[data-form]");
form.addEventListener("submit", saveCode);

function saveCode(event) {
  event.preventDefault();

  const isLogged = isUserLogged();
  if (!isLogged) return alert("You must be logged in to save a code");

  const id = getPageId();
  if (id) return updateCode(id);

  addNewCode();
}

function isUserLogged() {
  const user = window.sessionStorage.getItem("user");
  return user ? true : false;
}
