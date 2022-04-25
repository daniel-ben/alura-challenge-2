import Code from "./Code.js"
import { getCodes } from "./getCodes.js";

export function addNewCode() {
  if (!window.localStorage.codes) window.localStorage.setItem("codes", "{}");
  
  const newCode = createNewCode();
  let codes = getCodes();
  codes = { ...codes, [newCode.id]: newCode };

  window.localStorage.setItem("codes", JSON.stringify(codes));

  alert("Code saved");
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