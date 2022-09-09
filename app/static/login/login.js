const login_form = document.querySelector('[data-login-form]');
login_form.addEventListener('submit', login);

async function login(event) {
    event.preventDefault();

    const gitUser = await getUserFromGit()
    if (!gitUser) return

    const data = createForm(gitUser);
    store_user(data);
    
    window.location.href = '/';
}

async function getUserFromGit() {
    const username = login_form[0].value;
    const response = await fetch('https://api.github.com/users/' + username)

    if (response.status == 404) {
        const message = 'Invalid user';
        alert(message);
        return false;
    }

    return response.json();
}

function createForm(gitUser) {
    const data = new FormData();
    data.append("username", gitUser.name)
    data.append("photo_url", gitUser.avatar_url)

    return data;
}

async function store_user(data) {
    fetch('/login', {
        "method": 'POST',
        "body": data,
    })
        .then(res => res.json())
        .then(res => console.log)
}