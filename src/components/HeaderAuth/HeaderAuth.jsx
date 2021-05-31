import logo from '../../images/logo.svg';
import React from "react";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    NavLink,
    // Redirect,
    // useHistory
} from "react-router-dom";


function HeaderAuth(props) {
    return (
        <header className="headerAuth">
            <NavLink to="/">
                <img src={logo} alt="Логотип С" className="headerAuth__logo" />
            </NavLink>


            <div className="headerAuth__wrapper">
                <NavLink to="/movies" className="headerAuth__link" activeClassName="headerAuth__active-link">
                        Фильмы
                </NavLink>
                <NavLink to="/saved-movies" className="headerAuth__link" activeClassName="headerAuth__active-link">
                        Сохранённые фильмы
                </NavLink>
                <NavLink to="/profile" activeClassName="headerAuth__active-account">
                    <button
                        className="headerAuth__account"
                        type="button"
                        value="Аккаунт">
                        Аккаунт
                    </button>
                </NavLink>
            </div>

        </header>
    );
}

export default HeaderAuth