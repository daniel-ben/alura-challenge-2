export function getCodeById(id) {
  const codeData = JSON.parse(window.localStorage.getItem("codes"))[id];
  return codeData;
}

export function getAllSavedCodes() {
  let codes = JSON.parse(localStorage.getItem("codes"));
  return codes;
}
