const showCards = () => {
  return fetch('http://localhost:3000/cards')
  .then(response => response.json())
}

const createCard = (card) => {
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
      likes: 0,
      isLiked: false,
      comments: [],
    })
  })
}

const editCard = (id, card) => {
  return fetch(`http://localhost:3000/cards/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: card.title,
      description: card.description,
      language: card.language,
      color: card.color,
      content: card.content,
      likes: card.likes,
      isLiked: card.isLiked,
      comments: card.comments,
    })
  })
  .then(response => response.json())
}

const openCard = (id) => {
  return fetch(`http://localhost:3000/cards/${id}`)
  .then(response => response.json())
}

const login = (user) => {
  return fetch(`https://api.github.com/users/${user}`)
  .then(response => response.json())
}

export const clientService = { 
  showCards,
  createCard,
  editCard,
  openCard,
  login
};