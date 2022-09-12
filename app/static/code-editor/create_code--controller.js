const save_code_form = document.querySelector('[data-form]');
save_code_form.addEventListener('submit', saveCode);

function saveCode(event) {
    event.preventDefault();

    const code = document.querySelector('[data-code]').innerText;
    const title = document.querySelector('[data-title]').value;
    const description = document.querySelector('[data-description]').value;
    const language = document.querySelector('[data-language]').value;
    const color = document.querySelector('[data-color-picker]').value;

    console.log(code);
}