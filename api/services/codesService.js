import { mockDB } from "/api/infra/mockDB.js";

export function get(id) {
  const codeData = JSON.parse(window.localStorage.getItem("codes"))[id];
  return codeData;
}

export function getAll() {
  let codes = JSON.parse(localStorage.getItem("codes"));
  return codes;
}

// does the samething as create. It's here just as an hypothetical update
export function update(code) {
  let codes = JSON.parse(window.localStorage.getItem("codes"));
  codes[code.id] = code;
  window.localStorage.setItem("codes", JSON.stringify(codes));
}

export function create(code) {
  let codes = JSON.parse(window.localStorage.getItem("codes"));
  codes[code.id] = code;
  window.localStorage.setItem("codes", JSON.stringify(codes));
}

export function deleteCode(id) {
  let codes = JSON.parse(window.localStorage.getItem("codes"));
  delete codes[id];
  window.localStorage.setItem("codes", JSON.stringify(codes));
}