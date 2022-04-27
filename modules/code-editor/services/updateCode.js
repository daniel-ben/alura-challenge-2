import { getAllSavedCodes } from "./getAllSavedCodes.js";
import { getCodeById } from "./getCodeById.js";

export function updateCode(id, formData) {
  let codeData = getCodeById(id);
  codeData = { ...codeData, ...formData };

  const codes = getAllSavedCodes();
  codes[id] = codeData;
  window.localStorage.setItem("codes", JSON.stringify(codes));

  alert("Code updated");
}
