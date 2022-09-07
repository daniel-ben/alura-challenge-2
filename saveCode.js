const saveButton = document.querySelector('[data-save-button]');

saveButton.addEventListener('click', save);

function save(event) {
    event.preventDefault();

    const author = JSON.parse(window.sessionStorage.getItem('user'));
    
    const formData = {
        title: document.querySelector('[data-title]').value,
        description: document.querySelector('[data-description]').value,
        code: document.querySelector('[data-code]').textContent,
        language: document.querySelector('[data-language]').value,
        color: document.querySelector('[data-color-picker]').value,
        author: {
          username: author.username,
          photourl: author.photourl,
        }
    }
}