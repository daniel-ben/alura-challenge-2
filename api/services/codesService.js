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