import { deleteCodeById } from '../../api/controller/codesController.js';
import { getPageId } from './getPageId.js';

const deleteButton = document.querySelector('[data-delete-button]');

deleteButton.addEventListener('click', deleteCode);

function deleteCode(event) {
    event.preventDefault();
    const id = getPageId();
    deleteCodeById(id);
}