import { Card } from './Card.js';

const newCard = (card, author) => {
  const url = new URL(window.location);
  const userId = url.searchParams.get("userId");

  const newCard = document.createElement('a');
  newCard.href = `../telas/editor.html?userId=${userId}&id=${card.id}`;
  newCard.classList.add('card');
  newCard.innerHTML = Card(card, author);

  const code_wrapper = newCard.querySelector('[data-code-wrapper]');
  const code = code_wrapper.querySelector('[data-code-highlighter]');
  code.textContent = card.content;
  hljs.highlightElement(code);

  return newCard;
};

export { newCard };
