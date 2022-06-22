import { getGitUser, storeUser} from '../services/loginService.js';

export async function login(username) {
  const user = await getGitUser(username)
  const validatedUser = await validateUser(user);
  if (validatedUser) {
    storeUser(validatedUser);
    window.location.href = "../../src/pages/code-editor.html";
  }
}

function validateUser(response) {
  if (response.status == 404) {
    alert("User not found");
    throw new Error("User not found");
  } else {
    return response.json();
  }
}