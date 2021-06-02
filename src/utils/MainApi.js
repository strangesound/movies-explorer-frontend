class MainApi {
    constructor({ address }) {
        this._address = address;
        // this._token = token;
    }


    getUserMovies() {
        const _token = localStorage.token
        return fetch(`${this._address}/movies`, {
            method: 'Get',

            headers: {
                authorization: _token
            }
        })
            .then((res) => {
                return this._returnResInJSON(res);
            })
    }


    addNewCard({ name, link }) {
        const _token = localStorage.token

        return fetch(`${this._address}/cards`, {
            method: 'Post',
            headers: {
                authorization: _token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })

            .then((res) => {
                return this._returnResInJSON(res);
            })
    }


    getUserInfo() {
        const _token = localStorage.token

        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: _token
            }
        })
            .then((res) => {
                return this._returnResInJSON(res);
            })
    }

    patchUserInfo(name, email) {
        const _token = localStorage.token

        // console.log('patchUserInfo',name, job)
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: _token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then((res) => {
                return this._returnResInJSON(res);
            })
    }

    patchAvatarImage(imageUrl) {
        const _token = localStorage.token

        return fetch(`${this._address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: _token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: imageUrl
            })
        })
            .then((res) => {
                return this._returnResInJSON(res);
            })
    }
    // changeLikeStatus(MovieId, isLiked) {
    //     const _token = localStorage.token
    //     console.log('isLiked status in changeLikeCardStatus', isLiked)
    //     return fetch(`${this._address}/cards/${cardId}/likes`, {
    //         method: isLiked ? "DELETE" : "PUT",
    //         headers: {
    //             authorization: _token
    //         }
    //     })
    //         .then((res) => {
    //             console.log(cardId, isLiked, res)

    //             return this._returnResInJSON(res);
    //         })

    // }



    addMovieToLiked(movie) {
        // console.log('main api addMovieToLiked',movie, currentUser)
        const _token = localStorage.token

        return fetch(`${this._address}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

                authorization: _token
            },
            body: JSON.stringify({
                country: movie.country, // — страна создания фильма. Обязательное поле-строка.
                director: movie.director, // — режиссёр фильма. Обязательное поле-строка.
                duration: movie.duration.toString(), // — длительность фильма. Обязательное поле-число.
                year: movie.year, // — год выпуска фильма. Обязательное поле-строка.
                description: movie.description, // — описание фильма. Обязательное поле-строка.
                image: 'https://api.nomoreparties.co'+movie.image.url, // — ссылка на постер к фильму. Обязательное поле-строка. Запишите её URL-адресом.
                trailer: movie.trailerLink, // — ссылка на трейлер фильма. Обязательное поле-строка. Запишите её URL-адресом.
                movieId: movie.id, // — _id фильма, который содержится в ответе сервиса MoviesExplorer. Обязательное поле.
                nameRU: movie.nameRU, // — название фильма на русском языке. Обязательное поле-строка.
                nameEN: movie.nameEN, // — название фильма на английском языке. Обязательное поле-строка.
                thumbnail: 'https://api.nomoreparties.co'+movie.image.formats.thumbnail.url, // — миниатюрное изображение постера к фильму. Обязательное поле-строка. Запишите её URL-адресом.
            })
        })
            .then((res) => {
                return this._returnResInJSON(res);
            })
    }

    deleteMovie(movieId) {
        const _token = localStorage.token
        return fetch(`${this._address}/movies/${movieId}`, {
            method: 'DELETE',

            headers: {
                authorization: _token
            }
        })
            .then((res) => {
                return this._returnResInJSON(res);
            })
    }


    _returnResInJSON(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Что-то пошло не так: ${res.status}`));
    }


}

export const mainApi = new MainApi({
    address: 'https://api.arseny-movies.nomoredomains.club',
    // token: '573df025-a590-432a-b9ad-3031215c8ade'
})
