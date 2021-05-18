// import edit from '../images/edit.svg';
import React from 'react';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function SavedMovies(props) {

    // const currentUser = React.useContext(CurrentUserContext);

    return (
        <main>
            <BurgerMenu />
            <HeaderAuth />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </main>
    );
}

export default SavedMovies


