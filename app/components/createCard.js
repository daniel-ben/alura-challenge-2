import { Card } from './Card.js';

const createCard = (card, user) => {
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.innerHTML = Card(card, user);

  return newCard;
};

export { createCard };
