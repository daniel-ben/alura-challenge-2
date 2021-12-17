const language = document.querySelector('[data-language]');
const code_container = document.querySelector('[data-code-wrapper]');
const highlighter_button = document.querySelector('[data-highlighter-button]');

const highlight = event => {
  event.preventDefault();

  const code = code_container.innerText;
  code_container.innerHTML = `<code class="code-highlighter__code-editor hljs ${language.value}" contenteditable="true" aria-label="Editor de código" data-content required></code>`
  code_container.querySelector('[data-content]').textContent = code;
  hljs.highlightElement(code_container.querySelector('[data-content]'));
} 

highlighter_button.addEventListener('click', highlight);