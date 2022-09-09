function updateMenuActiveButton() {
    const current_page = getPage();
    updateButton(current_page);
}

function getPage() {
    const url = new URL(window.location);
    const page_name_pattern = /(?:\/)(\w+-?\w+)\/?$/;
    const current_page = page_name_pattern.exec(url)[1];

    return current_page;
}

function updateButton(current_page) {
    const menu_itens = document.querySelectorAll('[data-menu-item]');
    menu_itens.forEach((item) => {
        if (item.name == current_page) {
            item.classList.add('menu__link--active')            
        }
    })
}

updateMenuActiveButton();