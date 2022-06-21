import { deleteCodeById } from '/api/controller/codesController.js';
import { getPageId } from '/src/utils/getPageId.js';

const deleteButton = document.querySelector('[data-delete-button]');

deleteButton.addEventListener('click', deleteCode);

function deleteCode(event) {
    event.preventDefault();
    const id = getPageId();
    deleteCodeById(id);
}