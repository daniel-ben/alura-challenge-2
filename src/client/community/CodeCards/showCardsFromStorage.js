import { newCard } from "./Card.js";

async function showCardsFromStorage() {
  const cards_section = document.querySelector('[data-code-cards-section]');
  const codes = await getCodes(); 

  Object.keys(codes).forEach(code => {
    cards_section.appendChild(newCard(codes[code]));
  });
}

// call from api and remove this from here
function getCodes() {
  const codes = JSON.parse(window.localStorage.getItem("codes")) || {};
  return codes;
}

showCardsFromStorage();