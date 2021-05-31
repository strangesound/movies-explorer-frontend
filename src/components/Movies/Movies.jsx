// import edit from '../images/edit.svg';
import React from 'react';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {

    // const currentUser = React.useContext(CurrentUserContext);
    // console.log('movies jsx', props)
    return (
        <main>
            <BurgerMenu />
            <HeaderAuth />
            <SearchForm
                searchValue={props.searchValue}
                setSearchValue={props.setSearchValue}
                korotkometr={props.korotkometr}
                setKorotkometr={props.setKorotkometr}

            />
            <MoviesCardList
                movies={props.movies}
                searchValue={props.searchValue}
                korotkometr={props.korotkometr}
                onLike = {props.onLike}
                onDisLike={props.onDisLike}
                userMovies = {props.userMovies}
                searchFormValue={props.searchValue}
                // setSearchValue={props.setSearchValue}




            />
            <Footer />
        </main>
    );
}

export default Main


