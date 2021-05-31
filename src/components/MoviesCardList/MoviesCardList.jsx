import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function MoviesCardList(props) {
    // console.log('MoviesCardList', props.props.props, typeof props.props.props)
    // const currentUser = React.useContext(CurrentUserContext);
    // const movies = Array.from(props.movies);
    // console.log('MoviesCardList-movies', movies, typeof movies)
    // console.log(Object.values(props));


    return (
        <section className="MoviesCardList">
            <div className="movieCard-grid">
                {
                    props.movies
                        .filter(item => {
                            if (props.searchValue || props.searchFormValue) {
                                return item
                            }
                            else {
                                return null// return (item.nameRU.toLowerCase().includes(props.searchValue.toLowerCase()))
                            }})
                        .filter(item => {
                            if (props.korotkometr) {
                                return item.duration < 40 && (item.nameRU.toLowerCase().includes(props.searchValue.toLowerCase()))
                            }
                            else {
                                return (item.nameRU.toLowerCase().includes(props.searchValue.toLowerCase()))
                            }
                        }).map((item) => {
                            return (<MoviesCard
                                {...item}
                                key={item.id}
                                nameRU={item.nameRU}
                                onLike={props.onLike}
                                onDisLike={props.onDisLike}
                                userMovies={props.userMovies}

                            />)
                        })
                }


            </div>
            <button type="button" className="MoviesCardList__btn-more">Ещё</button>
        </section >
    );
}

export default MoviesCardList


