const User = (user) => {
  return (
    `<img src="${user.photourl}" alt="Foto do usuário" class="user-photo header__user-photo">
    <p class="body-typ">${user.username}</p>`
  )
}

export { User }