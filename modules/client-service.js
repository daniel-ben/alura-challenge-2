const readOnlyToken = "33c9b5a3cba02275c1ee49fc0d79d9";

// READ ONLY


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

const updateCard = (card, id) => {
  const localStorage = window.localStorage;
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards[id] = card;
  localStorage.setItem("cards", JSON.stringify(cards));
};

export const clientService = {
  getCards,
  getCard,
  updateCard,
};
