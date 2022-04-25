import { getCodes } from "./getCodes.js";
import { getSavedCode } from "./getSavedCode.js";

export function updateCode(id) {
  const codeData = getSavedCode(id);

  codeData.code = document.querySelector("[data-code]").innerText;
  codeData.title = document.querySelector("[data-title]").value;
  codeData.description = document.querySelector("[data-description]").value;
  codeData.language = document.querySelector("[data-language]").value;
  codeData.color = document.querySelector("[data-color-picker]").value;

  const codes = getCodes();
  codes[id] = codeData;
  window.localStorage.setItem("codes", JSON.stringify(codes));

  alert("Code updated");
}
