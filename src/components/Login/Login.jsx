import React from 'react';
import './login.css';
// import Header from '../HeaderAuth/HeaderAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from "react-router-dom";
import logo from '../../images/logo.svg';




function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    function handleChangeEmail(e) {
        setEmail(e.target.value);

    }
    function handleChangePasword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(password, email);
    }

    return (
        <>
            <section className="login">
                <Link to="/">
                    <img src={logo} alt="Логотип С" className="login__logo" />
                </Link>

                <form onSubmit={handleSubmit} className='form-registration' name='form-registration'>
                    <h2 className="form-registration__head">Рады видеть!</h2>
                    <fieldset className="form-registration__contact-wrapper">
                        <p className="form-registration__email-holder">E-mail</p>
                        <input
                            value={email || ''}
                            onChange={handleChangeEmail}
                            id="email"
                            className="form-registration__email"
                            // placeholder="pochta@yandex.ru" type="e-mail"
                            name="email"
                            required
                            autoComplete="on" />
                        <p className="form-registration__email-holder">Пароль</p>

                        <input
                            value={password || ''}
                            onChange={handleChangePasword}

                            id="password"
                            className="form-registration__email"
                            // placeholder="Пароль" type="password"
                            name="password"
                            required
                            autoComplete="off" />
                    </fieldset>
                    <button className="form-registration__submitBtn" type="submit" value="Войти">
                        Войти
                    </button>
                </form>
                <p className="form-registration__bottom-text">Ещё не зарегистрированы? <Link className="form-registration__register" to="/signup">Регистрация</Link></p>
            </section>
        </>
    )
}


export default Login;
