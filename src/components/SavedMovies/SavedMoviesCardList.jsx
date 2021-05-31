import React from 'react';
import SavedMoviesCard from '../savedMoviesCard/SavedMoviesCard';
import '../MoviesCardList/MoviesCardList.css';


import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// movies.owner — то, что приходит в карточке
// currentUser._id

function SavedMoviesCardList(props) {
    // console.log('props in movies cardlist', props.movies)
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <section className="MoviesCardList">
            <div className="movieCard-grid">
                {

                    props.movies
                        .filter(item => {
                            return item.owner === currentUser._id
                        })
                        .filter(item => {

                            if (props.korotkometr) {
                                return item.duration < 40 && (item.nameRU.toLowerCase().includes(props.searchValue.toLowerCase()))
                            }
                            else {
                                return (item.nameRU.toLowerCase().includes(props.searchValue.toLowerCase()))
                            }
                        }).map((item) => {
                            console.log(item)
                            return (<SavedMoviesCard
                                {...item}
                                key={item._id}
                                onDisLike={props.onDisLike}
                            />)
                        })
                }
            </div>
            <button type="button" className="MoviesCardList__btn-more">Ещё</button>
        </section >
    );
}

export default SavedMoviesCardList


