// import edit from '../images/edit.svg';
import React from 'react';
import brothers from '../images/brothers.png';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function FirstScreen(props) {

    // const currentUser = React.useContext(CurrentUserContext);

    return (
        <section className="firstScreen">
            <h1 className="firstScreen__header">Учебный проект студента факультета Веб-разработки</h1>
            <img src={brothers} alt="Братья Петрович" className="firstScreen__img" />

        </section>
    );
}

export default FirstScreen


