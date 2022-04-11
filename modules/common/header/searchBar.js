const logo = document.querySelector('[data-logo]');
const searchBar = document.querySelector('[data-search-bar]');
const searchButton = document.querySelector('[data-search-icon]');
const menu_Button = document.querySelector('[data-menu-icon]');
const close_Button = document.querySelector('[data-close-icon]');


let isActive = false;

searchButton.addEventListener('click', () => {
  if (!isActive) {
    logo.classList.add('hidden');
    searchBar.classList.add('active');
    searchButton.classList.add('hidden');
    menu_Button.classList.add('hidden');
    close_Button.classList.remove('hidden');
    isActive = true;
  } 
})

close_Button.addEventListener('click', () => {
  if (isActive) {
    logo.classList.remove('hidden');
    searchBar.classList.remove('active');
    searchButton.classList.remove('hidden');
    menu_Button.classList.remove('hidden');
    close_Button.classList.add('hidden');
    isActive = false;
  }
})