const newCard = (card) => {
  const newCard = document.createElement('a');
  newCard.href = `../telas/editor.html?id=${card.id}`;
  newCard.classList.add('card');
  newCard.dataset.cardId = card.id;
  newCard.innerHTML = Card(card);

  const code_wrapper = newCard.querySelector('[data-code-wrapper]');
  const code = code_wrapper.querySelector('[data-code-highlighter]');
  code.textContent = card.content;
  hljs.highlightElement(code);

  return newCard;
};

const Card = (card) => {
  return (
    `
    <div class="code-highlighter__container code-highlighter__container-community" style="border-color:${card.color.hex}" data-code-container>
      <div class="code-highlighter__dots">
        <div class="dots dots-community first_dot"></div>
        <div class="dots dots-community second_dot"></div>
        <div class="dots dots-community third_dot"></div>
      </div>
      <div class="code-wrapper" data-code-wrapper>
        <pre><code class="code-highlighter__code hljs ${card.language}" data-code-highlighter></code></pre>
      </div>
    </div>

    <div class="card-content">
      <p class="title-typ card-content__title">${card.title}</p>
      <p class="body-typ card-content__description">${card.description}</p>

      <div class="card-actions">
        <div class="card-actions__buttons-container">

          <div class="card-actions__buttons card-actions__comments">
            <img src="../assets/img/comment.svg" alt="ícone de comentários" class="card-actions__icon">
            <span class="body-typ card-actions__numbers">${card.comments.length}</span>
          </div>
          
          <div class="card-actions__buttons card-actions__likes" data-like-button>
            <img src=${card.isliked ? "../assets/img/like-active.svg" : "../assets/img/like.svg"} alt="ícone de likes" class="card-actions__icon">
            <span class="body-typ card-actions__numbers" data-likes-counter>${card.likes}</span>

          </div>
        
        </div>
        
        <div class="user card__user">
          <img src=${card.photourl} alt="Foto do usuário" class="user-photo user-photo-small">
          <p class="body-typ">${card.username}</p>
        </div>
      </div>
    </div>
    `
  )
};

export { newCard };
