const getCards = () => {
  return fetch('http://localhost:3000/cards')
  .then(response => response.json())
}

const saveCard = (card) => {
  return fetch('http://localhost:3000/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: card.title,
      description: card.description,
      language: card.language,
      color: card.color,
      content: card.content,
    })
  })
  .then(response => response.body)
}

export const clientService = { 
  getCards,
  saveCard 
};