export function getCodes() {
    let codes = JSON.parse(localStorage.getItem("codes"));
    return codes;
  }
  