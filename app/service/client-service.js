const readOnlyToken = "33c9b5a3cba02275c1ee49fc0d79d9";

// READ ONLY
const getCards = () => {
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

// FULL ACCESS
const createCard = (card, user) => {
  return fetch("http://localhost:3000/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
      author: user.id,
    }),
  });
};

const editCard = (id, card) => {
  return fetch(`http://localhost:3000/cards/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
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
      author: card.author,
    }),
  }).then((response) => response.json());
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
