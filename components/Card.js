const Card = `
<div class="card">
  ${code_highlighter}
  <div class="card-content">
    ${card_info}
    ${card_actions}
  </div>
</div>`;

const code_highlighter = 
`
<div class="code-highlighter__container" data-code-container>
  <div class="code-highlighter__dots">
    <div class="dots first_dot"></div>
    <div class="dots second_dot"></div>
    <div class="dots third_dot"></div>
  </div>
  <p class="code-highlighter__code" data-code-highlighter>${content}</p>
</div>
`;

const card_info = 
`
<p class="title-typ card-content__title">${title}</p>
<p class="body-typ card-content__description">${description}</p>
`;

const card_actions = 
`
<div class="card-actions">

  <div class="card-actions__buttons-container">

    <div class="card-actions__buttons card-actions__comments">
      <img src="../assets/img/comment.svg" alt="ícone de comentários" class="card-actions__icon">
      <span class="body-typ card-actions__numbers">${comments.length()}</span>
    </div>
    
    <div class="card-actions__buttons card-actions__likes">
      <img src="../assets/img/like.svg" alt="ícone de comentários" class="card-actions__icon" data-like-button>
      <span class="body-typ card-actions__numbers">${likes}</span>
    </div>
  
  </div>
  ${user};
</div>
`;

const user = 
`
<div class="user card__user">
  <img src=${user.photo} alt="Foto do usuário" class="user-photo user-photo-small">
  <p class="body-typ">${user.name}</p>
</div>
`;
