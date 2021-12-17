const code = document.querySelector('[data-content]');

code.addEventListener('click', () => {
  if (code.innerText == 'Escreva seu código aqui') {
    code.innerText = '';
  }
})