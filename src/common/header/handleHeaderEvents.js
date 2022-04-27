const menuButton = document.querySelector("[data-menu-icon]");
const closeButton = document.querySelector("[data-close-icon]");
const searchButton = document.querySelector("[data-search-icon]");

const logo = document.querySelector("[data-logo]");
const searchBar = document.querySelector("[data-search-bar]");
const menu = document.querySelector("[data-menu]");

function handleHeaderEvents() {
  handleSearchBarDisplay();
  handleMenuDisplay();
}

function handleSearchBarDisplay() {
  searchButton.addEventListener("click", openSearchBar);
  closeButton.addEventListener("click", closeSearchBar);
}

function openSearchBar() {
  hide(logo);
  hide(searchButton);
  hide(menuButton);

  show(searchBar);
  show(closeButton);
}

function closeSearchBar() {
  show(logo);
  show(searchButton);
  show(menuButton);

  hide(searchBar);
  hide(closeButton);
}

function handleMenuDisplay() {
  menuButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
}

function openMenu() {
  hide(menuButton);
  hide(searchButton);

  show(closeButton);
  show(menu);
}

function closeMenu() {
  show(menuButton);
  show(searchButton);

  hide(closeButton);
  hide(menu);
}

function hide(item) {
  item.style.display = "none";
}

function show(item) {
  item.style.display = "flex";
}

handleHeaderEvents();
