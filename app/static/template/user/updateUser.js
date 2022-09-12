function updateUser() {
  const userContainers = document.querySelectorAll('[data-user]');
  const userData = JSON.parse(sessionStorage.getItem('user'));

  userContainers.forEach(element => {
    updateUserPicutreAndName(userData, element);
  });
}

function updateUserPicutreAndName(userData, userContainer) {
  if (userData) {
    userContainer.querySelector('img').src = userData.photo_url;
    userContainer.querySelector('p').innerHTML = userData.username;
  }
}

updateUser();