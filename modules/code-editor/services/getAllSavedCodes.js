export function getAllSavedCodes() {
    let codes = JSON.parse(localStorage.getItem("codes"));
    return codes;
  }
  