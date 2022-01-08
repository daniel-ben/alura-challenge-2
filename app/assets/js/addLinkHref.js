const url = new URL(window.location);
const id = url.searchParams.get("userId");

const comLink = document.querySelector('[data-link-community]');
comLink.href = `./comunidade.html?userId=${id}`;

const editLink = document.querySelector('[data-link-editor]');
editLink.href = `./editor.html?userId=${id}`;