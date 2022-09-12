const hidden_code = document.querySelector('[data-hidden-code]');
const visible_code = document.querySelector('[data-visible-code]');
const code_container = document.querySelector('[data-code-container]')

code_container.addEventListener('input', handleEvent);

function handleEvent() {
    displayTextOnCodeTag();
    resize();

    if (visible_code.getAttribute('isHighlighted')) {
        const highlighted_code = hljs.highlight(hidden_code.value, { language: 'Javascript' });
        visible_code.innerHTML = highlighted_code.value;
    }
}

function resize() {
    hidden_code.style = 'height: auto;';
    hidden_code.style = `height: ${hidden_code.scrollHeight}px;`;

    visible_code.style = `width: ${hidden_code.clientWidth}px;`;
}

function displayTextOnCodeTag() {
    visible_code.innerText = hidden_code.value;
    hidden_code.value = visible_code.innerText;
}