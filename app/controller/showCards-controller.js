import { newCard } from "../components/Card.js";
import { clientService } from "../service/client-service.js";

clientService.getCards()
.then(cards => {
  const cards_section = document.querySelector('[data-cards-section]');
  cards.forEach(card => {
    cards_section.appendChild(newCard(card));
  });
});

