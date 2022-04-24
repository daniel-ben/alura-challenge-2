import { clientService } from "../service/client-service.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");

const inputContent = document.querySelector('[data-content]');
const inputTitle = document.querySelector('[data-title]');
const inputDescription = document.querySelector('[data-description]');
const inputLanguage = document.querySelector('[data-language]');
const inputColor = document.querySelector('[data-color-picker]');

if (id == 94458941 || id == 94518888) { //only two db cards, while there is no way to save to and alter db cards
  clientService.getCard(id)
  .then(card => {
    inputContent.innerText = card.content;
    inputContent.parentElement.parentElement.style.borderColor = card.color.hex;
    inputTitle.value = card.title;
    inputDescription.value = card.description;
    inputLanguage.value = card.language;
    inputColor.value = card.color.hex;
  })
} else if (id) {  //if not those two, will get from local storage, someday will get all from db
  const localStorage = window.localStorage;
  const card = JSON.parse(localStorage.getItem("cards"))[id];
  
  inputContent.innerText = card.content;
  inputContent.parentElement.parentElement.style.borderColor = card.color.hex;
  inputTitle.value = card.title;
  inputDescription.value = card.description;
  inputLanguage.value = card.language;
  inputColor.value = card.color.hex;
}