const highlighter_button = document.querySelector('[data-highlighter-button]');

highlighter_button.addEventListener('click', highlightCode);

function highlightCode(event) {
  event.preventDefault();

  const code = document.querySelector('[data-code]');
  const language = document.querySelector('[data-language]').value;

  const highlighted_code = hljs.highlight(code.textContent, { language: language })
  code.innerHTML = highlighted_code.value
}