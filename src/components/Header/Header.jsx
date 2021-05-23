import logo from '../../images/logo.svg';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
  } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Логотип С" className="header__logo" />

            <div className="header__wrapper">
                <Link to="/signup" className="header__registration">Регистрация</Link>
                <Link to="/signin">
                    <button
                        className="header__sign"
                        type="submit"
                        value="Войти">
                        Войти
                    </button>
                </Link>
            </div>

        </header>
    );
}

export default Header