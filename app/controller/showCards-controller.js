import { newCard } from "../components/newCard.js";
import { clientService } from "../service/client-service.js";

clientService.showCards()
.then(cards => {
  const cards_section = document.querySelector('[data-cards-section]');
  cards.forEach(card => {
    clientService.showUser(card.author)
    .then(author => {
      cards_section.appendChild(newCard(card, author));
    })
  });
});

