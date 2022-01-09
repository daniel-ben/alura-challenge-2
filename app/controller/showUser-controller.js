import { clientService } from "../service/client-service.js";
import { User } from "../components/User.js";

const userCard = document.querySelectorAll('[data-user-card]');
const user = JSON.parse(sessionStorage.getItem('user'));

userCard.forEach (card => {
  card.innerHTML = User(user);
});

