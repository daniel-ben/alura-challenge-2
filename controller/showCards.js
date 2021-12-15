import { createCard } from "../controller/createCard.js";

const showCards = (cards, user) => {
  const cards_section = document.querySelector('[data-cards-section]');
  cards.forEach(card => {
    cards_section.appendChild(createCard(card, user));
  })
}

export { showCards };