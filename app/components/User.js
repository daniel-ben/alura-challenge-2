const User = (user) => {
  return (
    `<img src="${user.photo}" alt="Foto do usuário" class="user-photo header__user-photo">
    <p class="body-typ">${user.username}</p>`
  )
}

export { User }