// import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import React, { useEffect, useState } from 'react';
import ScreenWidthNumber from '../../utils/ScreenWidthNumber';



// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function MoviesCardList(props) {
    // console.log('MoviesCardList', props.props.props, typeof props.props.props)
    // const currentUser = React.useContext(CurrentUserContext);
    // const movies = Array.from(props.movies);
    // console.log('MoviesCardList-movies', movies, typeof movies)
    // console.log(Object.values(props));
    const { howManyCards, moreButtonNumber } = ScreenWidthNumber(0);
    const [filmNumbers, setFilmNumbers] = useState(0);
    const [filteredArray, setFilteredArray] = useState([])
    // console.log('0', filmNumbers, howManyCards, moreButtonNumber)

    function handleMoreBtn() {
        // console.log('1', filmNumbers, howManyCards, moreButtonNumber)
        setFilmNumbers(filmNumbers + moreButtonNumber)
        // console.log('2', filmNumbers, howManyCards, moreButtonNumber)
        // console.log('filteredArray', filteredArray.length, 'filmNumbers', filmNumbers, '(filmNumbers >= filteredArray)', (filmNumbers >= filteredArray))

    }

    useEffect(() => {
        setFilmNumbers(howManyCards)
    }, [howManyCards]);


    useEffect(() => {
        const newArray = props.movies.filter(item => {
            if (props.korotkometr) {
                return item.duration < 40 && (item.nameRU.toLowerCase().includes(props.searchValue.toLowerCase()))
            }
            else {
                return (item.nameRU.toLowerCase().includes(props.searchValue.toLowerCase()))
            }
        });
        setFilteredArray(newArray)
    }, [props.korotkometr, props.searchValue, props.movies]);


    return (
        <section className="MoviesCardList">
            <div className="movieCard-grid">
                {
                    filteredArray
                        .slice(0, filmNumbers)
                        .map((item) => {
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
            <button type="button" className={(filmNumbers >= filteredArray.length) ? "displayNone" : "MoviesCardList__btn-more"} onClick={handleMoreBtn}>Ещё</button>
        </section >
    );
}

export default MoviesCardList


