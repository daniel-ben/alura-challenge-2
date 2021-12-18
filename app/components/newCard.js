import { Card } from './Card.js';

const newCard = (card, user) => {
  const newCard = document.createElement('a');
  newCard.href = `../telas/editor.html?id=${card.id}`;
  newCard.classList.add('card');
  newCard.innerHTML = Card(card, user);

  const code_wrapper = newCard.querySelector('[data-code-wrapper]');
  const code = code_wrapper.querySelector('[data-code-highlighter]');
  code.textContent = card.content;
  hljs.highlightElement(code);

  return newCard;
};

export { newCard };
