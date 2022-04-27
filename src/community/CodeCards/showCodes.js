import { newCard } from "./Card.js";

async function showCodes() {
  const cards_section = document.querySelector('[data-code-cards-section]');
  const codes = await getCodes(); 

  Object.keys(codes).forEach(code => {
    cards_section.appendChild(newCard(codes[code]));
  });
}

function getCodes() {
  const codes = JSON.parse(window.localStorage.getItem("codes")) || {};
  return codes;
}

showCodes();