import { clientService } from "../service/client-service.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");

const inputContent = document.querySelector('[data-content]');

const inputTitle = document.querySelector('[data-title]');
const inputDescription = document.querySelector('[data-description]');

const inputLanguage = document.querySelector('[data-language]');
const inputColor = document.querySelector('[data-color-picker]');

if (id) {
  clientService.openCard(id)
  .then(card => {
    inputContent.value = card.content;
    inputContent.parentElement.style.borderColor = card.color;
  
    inputTitle.value = card.title;
    inputDescription.value = card.description;
  
    inputLanguage.value = card.language;
    inputColor.value = card.color;
  })
}