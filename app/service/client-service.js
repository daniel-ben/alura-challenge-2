const showCards = () => {
  return fetch('http://localhost:3000/cards')
  .then(response => response.json())
}

const createCard = (card, user) => {
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
      author: user.id
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
      author: card.author
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
  // .then(response => response.json())
  .then(response => {
    if(response.status == 404) {
      alert('User not found')
      throw new Error('User not found')
    } else {
      return response.json()
    }
  })
}

const getUsers = () => {
  return fetch('http://localhost:3000/users')
  .then(response => response.json())
}

const createUser = (user) => {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: user.id,
      login: user.login,
      username: user.name,
      photo: `https://github.com/${user.login}.png?size=32`,
    })
  })
}

const showUser = (id) => {
  return fetch(`http://localhost:3000/users/${id}`)
  .then(response => response.json())
}

export const clientService = { 
  showCards,
  createCard,
  editCard,
  openCard,
  login,
  getUsers,
  createUser,
  showUser
};