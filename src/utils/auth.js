async function register(name, password, email) {
    //функция register - принимает почту и пароль, отправляет запрос регистрации на /signup

    const res = await fetch('https://api.arseny-movies.nomoredomains.club/signup', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            password: password,
            email: email
        })
    });
    return await res.json();
}

async function login(password, email) {
    // функция login - принимает почту и пароль, отправляет запрос авторизации на /signin . В ответ сервер вернет jwt, который нужно сохранить в localStorage
    const res = await fetch('https://api.arseny-movies.nomoredomains.club/signin', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
            email: email
        })
    });
    return await res.json();
}

async function checkToken(jwt) {
    // функция checkToken - принимает jwt, отправляет запрос на /users/me и возвращает данные пользователя
    const res = await fetch('https://api.arseny-movies.nomoredomains.club/users/me', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`
        }
    });
    // console.log('checkToken auth', res);
    return _returnResInJSON(res);

}

function _returnResInJSON(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(new Error(`Что- то пошло не так: ${res.status}`));
}


export { register, login, checkToken };