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

    return (
        <main>
            <BurgerMenu/>
            <HeaderAuth/>
            <SearchForm/>
            <MoviesCardList/>
            <Footer/>
        </main>
    );
}

export default Main


