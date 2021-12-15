import { createCard } from "../components/createCard.js";
import { clientService } from "../service/client-service.js";

// just for test, will use real users later
const user = 
{
  name: 'Harry',
  photo: '../../public/img/Photo.png'
}

const showCards = (cards, user) => {

  const cards_section = document.querySelector('[data-cards-section]');
  cards.forEach(card => {
    cards_section.appendChild(createCard(card, user));
  });

}

clientService.fetchCards()
.then(cards => {
  showCards(cards, user);
});

