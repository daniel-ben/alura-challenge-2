import { getPageId } from "../utils/index.js";
import { createNewCode, updateCode } from "../services/codeEditor-services.js";

const form = document.querySelector("[data-form]");
form.addEventListener("submit", saveCode);

function saveCode(event) {
  event.preventDefault();

  const isLogged = isUserLogged();
  if (!isLogged) return alert("You must be logged in to save a code");

  const formData = getCodeDataFromForm();

  const id = getPageId();
  id ? updateCode(id, formData) : createNewCode(formData);
}

function isUserLogged() {
  const user = window.sessionStorage.getItem("user");
  return user ? true : false;
}

function getCodeDataFromForm() {
  const formData = {
    title: document.querySelector("[data-title]").value,
    description: document.querySelector("[data-description]").value,
    code: document.querySelector("[data-code]").innerText,
    language: document.querySelector("[data-language]").value,
    color: document.querySelector("[data-color-picker]").value,
    author: JSON.parse(sessionStorage.getItem("user"))
  };

  return formData;
}