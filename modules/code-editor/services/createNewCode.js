import Code from "../models/Code.js"
import { getAllSavedCodes } from "./getAllSavedCodes.js";

export function createNewCode(formData) {
  if (!window.localStorage.codes) window.localStorage.setItem("codes", "{}");
  
  const newCode = new Code(formData);
  let codes = getAllSavedCodes();
  codes = { ...codes, [newCode.id]: newCode };

  window.localStorage.setItem("codes", JSON.stringify(codes));
  alert("Code saved");
}