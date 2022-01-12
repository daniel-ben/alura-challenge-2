const readOnlyToken = "33c9b5a3cba02275c1ee49fc0d79d9";

// READ ONLY
const getCards = () => { //from db
  return fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${readOnlyToken}`,
    },
    body: JSON.stringify({
      query: 
      `{
        allCards {
          id,
          title,
          description,
          content,
          language,
          color { hex },
          likes,
          isliked,
          comments,
          username,
          photourl,
        }
      }`
    })
  }).then((response) => response.json())
  .then((response) => (response.data.allCards));
}

const getCard = (id) => { 
  return fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${readOnlyToken}`,
    },
    body: JSON.stringify({
      query:
      `{
        card(filter: {id: {eq: "${id}"}}) {
          content
          title
          description
          language
          color { hex }
        }
      }`
    })
  }).then((response) => (response.json()))
  .then(response => response.data.card);
};

// LOCAL STORAGE
const createCard = (card, user, id) => {
  const localStorage = window.localStorage;
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  const newCard = {
    id: id || cards.length,
    title: card.title,
    description: card.description,
    content: card.content,
    language: card.language,
    color: card.color,
    likes: 0,
    isliked: false,
    comments: [],
    username: user.username,
    photourl: user.photourl
  };
  cards[newCard.id] = newCard;
  localStorage.setItem("cards", JSON.stringify(cards));
};

const editCard = (id, card) => {
  console.log('editCard');
};

// GIT API
const getGitUser = (username) => {
  return (
    fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (response.status == 404) {
        alert("User not found");
        throw new Error("User not found");
      } else {
        return response.json();
      }
    })
  );
};


export const clientService = {
  getCards,
  getCard,
  createCard,
  editCard,
  getGitUser,
};
