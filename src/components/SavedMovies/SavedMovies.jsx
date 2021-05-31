// import edit from '../images/edit.svg';
import React from 'react';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from './SavedMoviesCardList';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {
    // console.log('props in saved movies ', props)

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
            <SavedMoviesCardList
                searchValue={props.searchValue}
                korotkometr={props.korotkometr}
                onDisLike={props.onDisLike}
                movies = {props.movies}


            />
            <Footer />
        </main>
    );
}

export default Main


