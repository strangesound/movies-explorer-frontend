import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function MoviesCardList(props) {

    // const currentUser = React.useContext(CurrentUserContext);

    return (
        <section className="MoviesCardList">
            <div className="movieCard-grid">

                <MoviesCard />
                <MoviesCard />

                <MoviesCard />

                <MoviesCard />

                <MoviesCard />

            </div>
            <button type="button" className="MoviesCardList__btn-more">Ещё</button>
        </section >
    );
}

export default MoviesCardList


