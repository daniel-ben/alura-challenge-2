function newCard(code) {
  const newCard = document.createElement('a');
  newCard.href = `../pages/code-editor.html?id=${code.id}`;
  newCard.classList.add('card');
  newCard.dataset.cardId = code.id;
  newCard.innerHTML = addCodeCardInnerHTML(code);

  const codeText = newCard.querySelector('[data-code]');
  hljs.highlightElement(codeText);

  return newCard;
};

function addCodeCardInnerHTML(code) {
  return (
    `
    <div class="code-highlighter__code-container" data-code-container style="border-color:${code.color}" >
      <div class="code-highlighter__dots">
        <span></span> <span></span> <span></span>
      </div>
      <code class="code-highlighter__code hljs" data-code aria-label="Code editor" required>${code.code}</code>
    </div>

    <div class="card-content">
      <p class="title-typ card-content__title">${code.title}</p>
      <p class="body-typ card-content__description">${code.description}</p>

      <div class="card-actions">
        <div class="card-actions__buttons-container">

          <div class="card-actions__buttons card-actions__comments">
            <img src="../public/img/comment.svg" alt="comments icon" class="card-actions__icon">
            <span class="body-typ card-actions__numbers">${code.comments.length}</span>
          </div>
          
          <div class="card-actions__buttons card-actions__likes" data-like-button>
            <img src=${code.isliked ? "../public/img/like-active.svg" : "../public/img/like.svg"} alt="like icon" class="card-actions__icon">
            <span class="body-typ card-actions__numbers" data-likes-counter>${code.likes}</span>
          </div>
        
        </div>
        
        <div class="user author">
          <img src=${code.author.photourl} alt="Author photo" class="user-photo author-photo">
          <p class="body-typ">${code.author.username}</p>
        </div>
      </div>
    </div>
    `
  )
};

export { newCard };
