import { clientService } from "../service/client-service.js";
import { User } from "../components/User.js";

const userCard = document.querySelectorAll('[data-user-card]');

const url = new URL(window.location);
const id = url.searchParams.get("userId");

clientService.showUser(id)
.then(data => {
  const user = {username: data.username, photo: data.photo}
  userCard.forEach (card => {
    card.innerHTML = User(user);
  });
})

