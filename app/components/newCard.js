import { Card } from './Card.js';

const newCard = (card, user) => {
  const newCard = document.createElement('a');
  newCard.href = `../telas/editor.html?id=${card.id}`;
  newCard.classList.add('card');
  newCard.innerHTML = Card(card, user);

  const code = newCard.querySelector('[data-code-wrapper]')
  hljs.highlightElement(code);

  return newCard;
};

export { newCard };
