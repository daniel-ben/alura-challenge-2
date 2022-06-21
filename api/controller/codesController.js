import { get, getAll } from "/api/services/codesService.js";

export function getCodeById(id) {
    const codeData = get(id);
    return codeData;
  }
  
export function getAllCodes() {
  let codes = getAll();
  return codes;
}