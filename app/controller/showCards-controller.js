import { newCard } from "../components/Card.js";
import { clientService } from "../service/client-service.js";

const cards_section = document.querySelector('[data-cards-section]');

clientService.getCards() //from db
.then(cards => {
  cards.forEach(card => {
    cards_section.appendChild(newCard(card));
  });
})
.then(() => { //from localStorage
  const cards = JSON.parse(window.localStorage.getItem("cards")) || [];
  cards.forEach(card => {
    cards_section.appendChild(newCard(card));
  });
})


