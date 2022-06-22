import { mockDB } from '../../api/infra/mockDB.js';

function populate() {
    window.localStorage.setItem("codes", JSON.stringify(mockDB));
}

populate();