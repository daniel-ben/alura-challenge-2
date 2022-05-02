import { getPageId } from "../client/code-editor/utils.js";
import { getAllSavedCodes } from "../client/code-editor/services.js";

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
    window.location.href = "/src/client/code-editor/code-editor.html";
}
