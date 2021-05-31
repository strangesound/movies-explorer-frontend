// import edit from '../images/edit.svg';
import React from 'react';
import FirstScreen from '../First-screen';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {

    // const currentUser = React.useContext(CurrentUserContext);

    return (
        <main>
            <Header
                loggedIn={props.loggedIn}

            />
            <FirstScreen />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </main>
    );
}

export default Main


