const button = document.querySelector('[data-header__menu-icon]');
const close_icon = document.querySelector('[data-header__close-icon]');
const menu = document.querySelector('[data-menu]');

let menu_isOpen = false;

button.addEventListener('click', () => {  
 
  close_icon.classList.remove('hidden');
  button.classList.add('hidden');

  menu.classList.add('menu-Active');

  menu_isOpen = !menu_isOpen;
})

close_icon.addEventListener('click', () => {
  close_icon.classList.add('hidden');
  button.classList.remove('hidden');

  menu.classList.remove('menu-Active');

  menu_isOpen = !menu_isOpen;
})