import { mockDB } from "/api/infra/mockDB.js";

export function get(id) {
  const codeData = JSON.parse(window.localStorage.getItem("codes"))[id];
  return codeData;
}

export function getAll() {
  let codes = JSON.parse(localStorage.getItem("codes"));

  if (!codes) {
    codes = populate();
  }

  return codes;
}

function populate() {
  window.localStorage.setItem("codes", JSON.stringify(mockDB));
  return mockDB;
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