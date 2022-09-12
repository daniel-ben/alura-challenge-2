import { highlightCode } from "../lib/highlightCode.js";

document
  .querySelector("[data-highlighter-button]")
  .addEventListener("click", handleHighlightEvent);

function handleHighlightEvent(event) {
  event.preventDefault();

  // get elements and values
  const code = document.querySelector("[data-hidden-code]").value;
  const language = document.querySelector("[data-language]").value;
  const visible_code = document.querySelector("[data-visible-code]");

  highlightVisibleCode(code, language, visible_code);
  makeHighlightedTextEditable(visible_code);
}

function highlightVisibleCode(code, language, element) {
  const highlighted_code = highlightCode(code, language);
  element.innerHTML = highlighted_code.value;
}

function makeHighlightedTextEditable(element) {
  element.setAttribute("isHighlighted", true);
}
