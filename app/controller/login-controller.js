import { clientService } from "../service/client-service.js";

const login = document.querySelector('[data-login-form]');
const noLogin = document.querySelector('[data-no-login]');

login.addEventListener('submit', event => {
  event.preventDefault();

  const username = event.target.querySelector('[data-login-username]').value;

  if (username) {
    clientService.getGitUser(username)
    .then(user => {
      const currentUser = {username: user.name, photourl: `https://github.com/${user.login}.png?size=32`};
      sessionStorage.setItem('user', JSON.stringify(currentUser));
      window.location.href = './editor.html';
    })
  } else {
    alert('Please enter a username')
  }
});

noLogin.addEventListener('click', event => {
  event.preventDefault();
  const currentUser = {username: 'Fazer login', photourl: '../assets/img/user-solid.svg'};
  sessionStorage.setItem('user', JSON.stringify(currentUser));
  window.location.href = './editor.html';
})