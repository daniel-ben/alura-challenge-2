const form = document.querySelector('[data-form]');
form.addEventListener('submit', saveCode);

function saveCode(event) {
  event.preventDefault();

  const isLogged = isUserLogged();
  if (!isLogged) {
    alert("You must be logged in to save a code");
    return;
  }

  const id = getCodeId();
  if (id) {
    return editCode(id);
  } 
  addCode();
}

function isUserLogged() {
  const user = window.sessionStorage.getItem("user");
  return user ? true : false;
}

function getCodeId() {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  return id;
}

function addCode() {
  const newCode = createNewCode();
  let codes = JSON.parse(localStorage.getItem("codes"));
  codes = {...codes, [newCode.id]: newCode};
  window.localStorage.setItem("codes", JSON.stringify(codes));
}

// This could be a class
function createNewCode() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const newCode = {
    id: createNewId(),
    content: document.querySelector('[data-code]').innerText,
    title: document.querySelector('[data-title]').value,
    description: document.querySelector('[data-description]').value,
    language: document.querySelector('[data-language]').value,
    color: document.querySelector('[data-color-picker]').value,
    likes: 0,
    isliked: false,
    comments: [],
    author: {
      username: user.username,
      photourl: user.photourl 
    }
  };

  return newCode;
};


function createNewId() {
  if (!window.localStorage.codes) {
    window.localStorage.setItem("codes", '{}');
    return 0;
  }
  const codes = JSON.parse(window.localStorage.codes);
  const keys = Object.keys(codes);
  const lastKey = keys[keys.length - 1];
  return codes[lastKey].id + 1;
}