const code = document.querySelector('[data-code]');

code.addEventListener('click', () => {
  makeCodeEditable();
  clearPlaceholder();
  focusOnText();
})

function makeCodeEditable() {
  code.setAttribute('contenteditable', 'true');
}

function clearPlaceholder() {
  if (code.innerText == 'Write your code here') {
    code.innerText = '';
  }
}

function focusOnText() {
  code.focus();
}