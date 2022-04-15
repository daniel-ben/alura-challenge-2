function convertPasteToUnformattedText() {
  const code = document.querySelector('[data-code]');

  code.addEventListener('paste', convertToPlainText);
}

function convertToPlainText(event) {
  const pastedText = getPastedText(event);
  pasteUnformatedText(pastedText);
}

function getPastedText(event) {
  event.preventDefault();
  return event.clipboardData.getData('text/plain')
}

function pasteUnformatedText(pastedText) {
  code.textContent = pastedText;
}

convertPasteToUnformattedText();