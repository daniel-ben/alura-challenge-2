const menuButton = document.querySelector('[data-menu-icon]');
const closeButton = document.querySelector('[data-close-icon]');
const menu = document.querySelector('[data-menu]');

function handleMenuDisplay() {
  menuButton.addEventListener('click', openMenu)
  closeButton.addEventListener('click', closeMenu)
}

function openMenu() {
  closeButton.classList.remove('hidden');
  menuButton.classList.add('hidden');

  menu.classList.add('menu--active');
}

function closeMenu() {
  closeButton.classList.add('hidden');
  menuButton.classList.remove('hidden');

  menu.classList.remove('menu--active');
}

handleMenuDisplay();