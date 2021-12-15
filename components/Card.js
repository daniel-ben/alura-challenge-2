const Card = (card, user) => {

  return (
    `
    <div class="code-highlighter__container" data-code-container>
      <div class="code-highlighter__dots">
        <div class="dots first_dot"></div>
        <div class="dots second_dot"></div>
        <div class="dots third_dot"></div>
      </div>
      <p class="code-highlighter__code" border-color="${card.color}" data-code-highlighter>${card.content}</p>
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
          
          <div class="card-actions__buttons card-actions__likes">
            <img src="../assets/img/like.svg" alt="ícone de comentários" class="card-actions__icon" data-like-button>
            <span class="body-typ card-actions__numbers">${card.likes}</span>

          </div>
        
        </div>
        
        <div class="user card__user">
          <img src=${user.photo} alt="Foto do usuário" class="user-photo user-photo-small">
          <p class="body-typ">${user.name}</p>
        </div>
      </div>
    </div>
    `
  )
};

export { Card };