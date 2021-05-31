import logo from '../../images/logo.svg';
import React from "react";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // Redirect,
    // useHistory
  } from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
            <img src={logo} alt="Логотип С" className="header__logo" />

            <div className="header__wrapper">
                <Link to={props.loggedIn? "/movies":"/signup"} className="header__registration">{props.loggedIn? "Фильмы":"Регистрация"}</Link>
                
                <Link to="/saved-movies" className={props.loggedIn? "header__registration":"displaynone"}>Сохраненные фильмы</Link>
                
                <Link to={props.loggedIn? "/profile":"/signin"}>
                    <button
                        className="header__sign"
                        type="submit"
                        value="Войти">
                        {props.loggedIn? "Аккаунт":"Войти"}
                    </button>
                </Link>
            </div>

        </header>
    );
}

export default Header