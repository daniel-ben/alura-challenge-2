import Code from "./Code.js";

const form = document.querySelector("[data-form]");
form.addEventListener("submit", saveCode);

function saveCode(event) {
  event.preventDefault();

  const isLogged = isUserLogged();
  if (!isLogged) return alert("You must be logged in to save a code");

  const id = getCodeId();
  if (id) return editCode(id);

  const newCode = createNewCode();
  let codes = getLocalStorageCodes();
  codes = {...codes, [newCode.id]: newCode};

  window.localStorage.setItem("codes", JSON.stringify(codes));
}

function isUserLogged() {
  const user = window.sessionStorage.getItem("user");
  return user ? true : false;
}

function getCodeId() {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  return id;
}

function getLocalStorageCodes() {
  if (!window.localStorage.codes) {
    window.localStorage.setItem("codes", "{}");
  }
  let codes = JSON.parse(localStorage.getItem("codes"));
  return codes;
}

function createNewCode() {
  const newCode = new Code(
    document.querySelector("[data-title]").value,
    document.querySelector("[data-description]").value,
    document.querySelector("[data-code]").innerText,
    document.querySelector("[data-language]").value,
    document.querySelector("[data-color-picker]").value,
    JSON.parse(sessionStorage.getItem("user"))
  );

  return newCode;
}