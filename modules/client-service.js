// LOCAL STORAGE

const updateCard = (card, id) => {
  const localStorage = window.localStorage;
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards[id] = card;
  localStorage.setItem("cards", JSON.stringify(cards));
};

export const clientService = {
  updateCard,
};
