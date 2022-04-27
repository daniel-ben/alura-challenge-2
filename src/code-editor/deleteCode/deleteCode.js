import { getPageId } from "../utils.js";
import { getAllSavedCodes } from "../services.js";

const deleteButton = document.querySelector("[data-delete-button]");
deleteButton.addEventListener("click", deleteCode);

function deleteCode(event) {
  event.preventDefault();
  const id = getPageId();

  if (!id) return alert("You can't delete unsaved code");

  const codes = getAllSavedCodes();
  delete codes[id];

  window.localStorage.setItem("codes", JSON.stringify(codes));
  alert("Code deleted");
    window.location.href = "/src/code-editor/code-editor.html";
}
