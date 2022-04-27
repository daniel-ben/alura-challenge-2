import Code from "../Code.js"
import { getAllSavedCodes } from "../services.js";

export function createNewCode(formData) {
  if (!window.localStorage.codes) window.localStorage.setItem("codes", "{}");
  
  const newCode = new Code(formData);
  let codes = getAllSavedCodes();
  codes = { ...codes, [newCode.id]: newCode };

  window.localStorage.setItem("codes", JSON.stringify(codes));
  alert("Code saved");

  window.location.href = "/src/community/community.html";
}