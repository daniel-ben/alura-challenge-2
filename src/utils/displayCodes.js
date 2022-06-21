import { newCard } from "../../Card.js";
import { getAllCodes } from "/api/controller/codesController.js";

async function displayCodes() {
  const cards_section = document.querySelector('[data-code-cards-section]');
  let codes = await getAllCodes(); 

  Object.keys(codes).forEach(code => {
    cards_section.appendChild(newCard(codes[code]));
  });
}

displayCodes();