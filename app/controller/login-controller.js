import { clientService } from "../service/client-service.js";

const login = document.querySelector('[data-login-form]');

login.addEventListener('submit', event => {
  event.preventDefault();

  const username = event.target.querySelector('[data-login-username]').value;

  //if username is not empty
  if (username) {
    //get users from db
    clientService.getUsers()
    .then(users => {
      //check if user is in db
      const user = users.find(user => user.login === username)
      //if user is not in db
      if (user === undefined) {
        //get user from github
        clientService.login(username)
        .then(user => {
          //create user in db
          clientService.createUser(user)
          .then(user => {
            //redirect to user page
            window.location.href = `./editor.html`;
          })
        })
      } else {
        window.location.href = `./editor.html`;
      }
    })
  } else {
    alert('Please enter a username')
  }
});