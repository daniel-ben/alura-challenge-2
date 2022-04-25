const code = document.querySelector('[data-code]');
code.addEventListener('click', makeCodeEditable)

function makeCodeEditable() {
  code.setAttribute('contenteditable', 'true');
  clearPlaceholder();
  focusOnText();
}

function clearPlaceholder() {
  if (code.innerText == 'Write your code here') {
    code.innerText = '';
  }
}

function focusOnText() {
  code.focus();
}