import React from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import './404.css'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // Redirect,
    // useHistory
} from "react-router-dom";

function NotFound(props) {

    return (
        <section className="notFound">
            <div className="notFound__top"></div>
            <div className="notFound__wrapper">
                <h1 className="notFound__header">404</h1>
                <p className="notFound__page">Страница не найдена</p>
            </div>
            <Link to="/">
                <p className="notFound__back">Назад</p>
            </Link>
        </section>
    );
}

export default NotFound


