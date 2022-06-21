import { changeBorderColor } from "./changeCodeBorderColor.js";
import { getPageId } from "/src/utils/getPageId.js";
import { getCodeById } from "/api/controller/codesController.js";

function fillForm() {
  const id = getPageId();
  const codeData = getCodeById(id);
  if (!codeData) return;
  
  document.querySelector("[data-code]").innerText = codeData.code;
  document.querySelector("[data-title]").value = codeData.title;
  document.querySelector("[data-description]").value = codeData.description;
  document.querySelector("[data-language]").value = codeData.language;
  document.querySelector("[data-color-picker]").value = codeData.color;

  changeBorderColor();
}

fillForm();
