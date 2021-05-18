function register(password, email) {
    //функция register - принимает почту и пароль, отправляет запрос регистрации на /signup

    return fetch('https://auth.nomoreparties.co/signup', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
            email: email
        })

    })
        .then((res) => {
            // console.log('register', res)
            return res.json();
        })
}

function login(password, email) {
    // функция login - принимает почту и пароль, отправляет запрос авторизации на /signin . В ответ сервер вернет jwt, который нужно сохранить в localStorage
    return fetch('https://auth.nomoreparties.co/signin', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
            email: email
        })
    })
        .then((res) => {
            return res.json();
        })
}

function checkToken(jwt) {
    // функция checkToken - принимает jwt, отправляет запрос на /users/me и возвращает данные пользователя
    return fetch('https://auth.nomoreparties.co/users/me', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`
        }

    })
        .then((res) => {
            console.log('checkToken auth', res)
            return _returnResInJSON(res);
        })

}

function _returnResInJSON(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(new Error(`Что- то пошло не так: ${res.status}`));
}


export { register, login, checkToken };