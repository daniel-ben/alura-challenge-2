import { createCard } from "../components/createCard.js";

const cards_section = document.querySelector('[data-cards-section]');
const user = 
{
  name: 'Harry',
  photo: '../assets/img/Photo.png'
}

const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/cards');

http.send();

http.onload = () => {
  const data = http.response;
  const cards = JSON.parse(data);

  cards.forEach(card => {
    cards_section.appendChild(createCard(card, user));
  })
}

