// import Preloader from '../components/Preloader/Preloader';


class MoviesApi {
    constructor({ address }) {
        this._address = address;
        // this._token = token;
    }



    getInitialMovies() {

        // document.getElementById('.body').innerHTML = Preloader;


        return fetch(`${this._address}`, {
            headers: {
                // authorization: this._token
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

export const api = new MoviesApi({
    address: 'https://api.nomoreparties.co/beatfilm-movies',
    // token: '573df025-a590-432a-b9ad-3031215c8ade'
})
