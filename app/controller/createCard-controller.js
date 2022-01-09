import { clientService } from "../service/client-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const content = event.target.querySelector('[data-content]').innerText;
  const title = event.target.querySelector('[data-title]').value;
  const description = event.target.querySelector('[data-description]').value;
  const language = event.target.querySelector('[data-language]').value;
  const color = event.target.querySelector('[data-color-picker]').value;

  const card = { title, description, language, color, content };

  if (!id) { //create
    const user = JSON.parse(sessionStorage.getItem("user"));
    clientService.createCard(card, user)
    .then(() => {
      window.location.href = `../telas/comunidade.html`;
    })
  } else { //edit
    clientService.getCard(id)
    .then(() => {
      window.location.href = `../telas/comunidade.html`;
    })
  }
})