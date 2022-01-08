import { newCard } from "../components/newCard.js";
import { clientService } from "../service/client-service.js";

const comLink = document.querySelector('[data-link-community]');
comLink.href = `./comunidade.html?userId=${id}`;
// just for test, will use real users later
const user = 
{
  name: 'Harry',
  photo: '../assets/img/user-solid.svg'
}

clientService.showCards()
.then(cards => {
  const cards_section = document.querySelector('[data-cards-section]');
  cards.forEach(card => {
    cards_section.appendChild(newCard(card, user));
  });
});

