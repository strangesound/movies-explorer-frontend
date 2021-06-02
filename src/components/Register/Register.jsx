import React from 'react';
import './Register.css';
// import Header from '../HeaderAuth/HeaderAuth';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // Redirect,
    // useHistory
} from "react-router-dom";
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hooks/useForm'
// import InfoTooltip from '../InfoTooltip'


function Register(props) {
    // const [name, setName] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    // function handleChangeName(e) {
    //     setName(e.target.value);

    // }
    // function handleChangeEmail(e) {
    //     setEmail(e.target.value);

    // }
    // function handleChangePasword(e) {
    //     setPassword(e.target.value);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(values.name, values.password, values.email);
    }

    return (
        <>

            <section className="login">
                <Link to="/">
                    <img src={logo} alt="Логотип С" className="login__logo" />
                </Link>

                <form onSubmit={handleSubmit} className='form-registration' name='form-registration'>
                    <h2 className="form-registration__head">Добро пожаловать!</h2>
                    <fieldset className="form-registration__contact-wrapper">
                        <p className="form-registration__email-holder">Имя</p>
                        <input
                            value={values.name || ''}
                            onChange={handleChange}
                            id="name"
                            className="form-registration__email"
                            name="name"
                            required
                            autoComplete="on"
                            minLength="2"
                        />

                        <span className="form-error" id="register-form-error">
                            {errors.name || ''}
                        </span>
                        <p className="form-registration__email-holder">E-mail</p>
                        <input
                            value={values.email || ''}
                            onChange={handleChange}
                            id="email"
                            className="form-registration__email"
                            // placeholder="pochta@yandex.ru" type="e-mail"
                            name="email"
                            type="email"

                            required
                            autoComplete="on" />
                        <span className="form-error" id="email-form-error">
                            {errors.email || ''}
                        </span>

                        <p className="form-registration__email-holder">Пароль</p>

                        <input
                            value={values.password || ''}
                            onChange={handleChange}
                            type="password"
                            minLength="8"

                            id="password"
                            className="form-registration__email"
                            // placeholder="Пароль" type="password"
                            name="password"
                            required
                            autoComplete="off" />
                        <span className="form-error" id="password-form-error">
                            {errors.password || ''}
                        </span>
                    </fieldset>
                    <button className={isValid ? "form-registration__submitBtn" : "form-registration__submitBtn disabled"} disabled={!isValid} type="submit">
                        Зарегистрироваться
                    </button>
                </form>
                <p className="form-registration__bottom-text">Уже зарегистрированы? <Link className="form-registration__register" to="/signin">Войти</Link></p>
            </section>
        </>
    )
}


export default Register;
