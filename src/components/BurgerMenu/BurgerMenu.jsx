import logo from '../../images/logo.svg';
import openBurger from '../../images/burger-menu.svg';
import closeBurger from '../../images/burger-menu-close.svg';
import './BurgerMenu.css'
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
    useHistory
} from "react-router-dom";



function BurgerMenu(props) {
    const [burger, setBurger] = React.useState(false);

    function handleBurger(e) {
        setBurger(!burger);
        console.log(burger)

    }


    return (
        <burgerMenu className={burger ? "burgerMenu" : "burgerMenu-background" }>
            <NavLink to="/">
                <img src={logo} alt="Логотип С" className="burgerMenu__logo" />
            </NavLink>

            <button
                onClick={handleBurger}
                className="burgerMenu__open_btn"
                type="button"
                value="burger">
                <img src={burger ? closeBurger : openBurger} alt="БургерМеню" />
            </button>

            <div className={burger ? "burgerMenu__wrapper" : "burgerMenu__wrapper-close"}>
                <div className="navlink_wrapper">
                    <NavLink to="/" className="burgerMenu__link" activeClassName="burgerMenu__active-link">
                        Главная
                </NavLink>
                    <NavLink to="/movies" className="burgerMenu__link" activeClassName="burgerMenu__active-link">
                        Фильмы
                </NavLink>
                    <NavLink to="/saved-movies" className="burgerMenu__link" activeClassName="burgerMenu__active-link">
                        Сохранённые фильмы
                </NavLink>
                </div>
                <NavLink to="/profile" className="burgerMenu__account" activeClassName="burgerMenu__active-account">
                    Аккаунт
                </NavLink>
            </div>

        </burgerMenu>
    );
}

export default BurgerMenu