export function getGitUser(username) {
  return fetch(`https://api.github.com/users/${username}`)
}

export function storeUser(user) {
  const currentUser = {
    username: user.name,
    photourl: `https://github.com/${user.login}.png?size=32`,
  };
  sessionStorage.setItem("user", JSON.stringify(currentUser));
}