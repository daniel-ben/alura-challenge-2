const menuButton = document.querySelector('[data-menu-icon]');
const closeButton = document.querySelector('[data-close-icon]');
const menu = document.querySelector('[data-menu]');

let menu_isOpen = false;

menuButton.addEventListener('click', () => {  
 
  closeButton.classList.remove('hidden');
  menuButton.classList.add('hidden');

  menu.classList.add('menu--active');

  menu_isOpen = !menu_isOpen;
})

closeButton.addEventListener('click', () => {
  closeButton.classList.add('hidden');
  menuButton.classList.remove('hidden');

  menu.classList.remove('menu--active');

  menu_isOpen = !menu_isOpen;
})