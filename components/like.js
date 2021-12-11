const like = document.querySelector('[data-like-button]');

let isLiked = false;

like.addEventListener('click', () => {
  if (isLiked) {
    like.src="../assets/img/like.svg";
    isLiked = false;
  } else {
    like.src="../assets/img/heart.svg";
    isLiked = true;
  }
})