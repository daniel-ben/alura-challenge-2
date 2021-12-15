const fetchCards = () => {
  return fetch('http://localhost:3000/cards')
  .then(response => response.json())
}

export const clientService = { 
  fetchCards 
};