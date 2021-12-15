const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/cards');

http.send();

http.onload = () => {
  const data = http.response;
  console.log(data);
}

const three_dots = 
`<div class="code-editor__dots">
  <div class="dots first_dot"></div>
  <div class="dots second_dot"></div>
  <div class="dots three_dot"></div>
</div>`;

const conteudo = `
<div class="card">

<div class="code-editor__container">

  <p class="code-editor__code">
    const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)
    <br><br>
    const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
    <br><br>
    const unfold = (f, seed) => {
      const go = (f, seed, acc) => {
        const res = f(seed)
        return res ? go(f, res[1], acc.concat([res[0]])) : acc
      }
      return go(f, seed, [])
    }
  </p>
</div>

<div class="card-info">
  <p class="title-typ card-info__title">Título do projeto</p>
  <p class="body-typ card-info__description">Essa é a descrição do projeto</p>
  
  <div class="card-actions">

    <div class="card-actions__buttons-container">

      <div class="card-actions__buttons card-actions__comments">
        <img src="../assets/img/comment.svg" alt="ícone de comentários" class="card-actions__icon">
        <span class="body-typ card-actions__numbers">9</span>
      </div>
      
      <div class="card-actions__buttons card-actions__likes">
        <img src="../assets/img/like.svg" alt="ícone de comentários" class="card-actions__icon" data-like-button>
        <span class="body-typ card-actions__numbers">9</span>
      </div>
    
    </div>

    <div class="user card__user">
      <img src="../assets/img/Photo.png" alt="Foto do usuário" class="user-photo user-photo-small">
      <p class="body-typ">@Harry</p>
    </div>

  </div>
</div>
</div>`
