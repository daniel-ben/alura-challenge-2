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
.then(() => {  //will go to a separate section once db is functioning
  const likeIcons = cards_section.querySelectorAll('[data-like-button]');
  likeIcons.forEach(likeIcon => {
    likeIcon.addEventListener('click', event => {
      event.preventDefault();

      const cardId = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.cardId;
      let cardLikes = event.target.parentElement.querySelector('[data-likes-counter]');

      if (!(cardId == 94458941 || cardId == 94518888)) { //only two db cards, while there is no way to save to and alter db cards
        let card = JSON.parse(window.localStorage.cards)[cardId];
        
        if (card.isliked) {
          likeIcon.querySelector('img').src = "../assets/img/like.svg";
          card.likes--;
          cardLikes.innerText = card.likes;
        } else {
          likeIcon.querySelector('img').src = "../assets/img/like-active.svg";
          card.likes++;
          cardLikes.innerText = card.likes;
        }
        card.isliked = !card.isliked;
        clientService.updateCard(card, cardId);
      };

    });
  });
})


