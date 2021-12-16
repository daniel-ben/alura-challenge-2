import { newCard } from "../components/newCard.js";
import { clientService } from "../service/client-service.js";

// just for test, will use real users later
const user = 
{
  name: 'Harry',
  photo: '../assets/img/Photo.png'
}

clientService.showCards()
.then(cards => {
  const cards_section = document.querySelector('[data-cards-section]');
  cards.forEach(card => {
    cards_section.appendChild(newCard(card, user));
  });
});

