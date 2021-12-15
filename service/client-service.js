import { showCards } from "../controller/showCards.js";

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

  showCards(cards, user);
}

