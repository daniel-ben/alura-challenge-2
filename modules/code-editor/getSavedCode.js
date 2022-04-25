export function getSavedCode(id) {
  const codeData = JSON.parse(window.localStorage.getItem("codes"))[id];
  return codeData;
}
