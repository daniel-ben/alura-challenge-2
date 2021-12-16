import { clientService } from "../service/client-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const content = event.target.querySelector('[data-content]').value;

  const title = event.target.querySelector('[data-title]').value;
  const description = event.target.querySelector('[data-description]').value;

  const language = event.target.querySelector('[data-language]').value;
  const color = event.target.querySelector('[data-color-picker]').value;

  const card = { title, description, language, color, content };

  clientService.createCard(card);
})