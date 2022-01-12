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
  const color = {hex: event.target.querySelector('[data-color-picker]').value};

  const card = { title, description, language, color, content };

  if (id == 94458941 || id == 94518888) { //create
    alert("You can't edit this card");
    window.location.href = `../telas/comunidade.html`;
  } else { //edit
    const user = JSON.parse(sessionStorage.getItem("user"));
    clientService.createCard(card, user, id || null);
    window.location.href = `../telas/comunidade.html`;
  }
})