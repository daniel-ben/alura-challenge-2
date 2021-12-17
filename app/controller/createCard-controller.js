import { clientService } from "../service/client-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const content = event.target.querySelector('[data-content]').value;

  const title = event.target.querySelector('[data-title]').value;
  const description = event.target.querySelector('[data-description]').value;

  const language = event.target.querySelector('[data-language]').value;
  const color = event.target.querySelector('[data-color-picker]').value;

  const card = { title, description, language, color, content };

  //if (id) { edit instead of creating }
  if (!id) {
    clientService.createCard(card);
  } else {
    clientService.openCard(id)
    .then(data => {
      card.id = data.id;
      card.likes = data.likes;
      card.isLiked = data.isLiked;
      card.comments = data.comments;
      clientService.editCard(card.id, card);
    })
  }
})