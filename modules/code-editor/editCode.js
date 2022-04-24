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
  if (code.innerText == 'Escreva seu código aqui') {
    code.innerText = '';
  }
}

function focusOnText() {
  code.focus();
}