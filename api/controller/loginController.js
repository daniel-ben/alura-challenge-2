import { getGitUser, storeUser} from '/api/services/loginService.js';

export async function login(username) {
  const user = await getGitUser(username)
  const validatedUser = await validateUser(user);
  if (validatedUser) {
    storeUser(validatedUser);
    window.location.href = "/";
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