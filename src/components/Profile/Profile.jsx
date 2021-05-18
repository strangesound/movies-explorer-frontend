import React from 'react';
import './Profile.css';
import Header from '../HeaderAuth/HeaderAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from "react-router-dom";
import logo from '../../images/logo.svg';




function Profile(props) {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [edit, setEdit] = React.useState(true);


    function handleEditForm(e) {
        setEdit(!edit);
        console.log(edit)

    }
    function handleChangeEmail(e) {
        setEmail(e.target.value);
        console.log(name)

    }
    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(name, email);
    }

    return (
        <>
            <section className="Profile">
                {/* <Link to="/">
                    <img src={logo} alt="Логотип С" className="Profile__logo" />
                </Link> */}
                <Header />
                <div className="Profile__form-wrapper">
                <form onSubmit={handleSubmit} className='form-profile' name='form-profile'>
                    <h2 className="form-profile__head">Привет, Арсений!</h2>
                    <fieldset disabled={edit} className="form-profile__contact-wrapper">
                        <div className="form-profile__wrapper">
                            <p className="form-profile__email-holder">Имя</p>
                            <input
                                value={name || ''}
                                onChange={handleChangeName}

                                id="name"
                                className="form-profile__email"
                                placeholder="Арсений" type="text"
                                name="password"
                                required
                                autoComplete="off" />
                        </div>
                        <div className="form-profile__wrapper">

                            <p className="form-profile__email-holder">E-mail</p>
                            <input
                                value={email || ''}
                                onChange={handleChangeEmail}
                                id="email"
                                className="form-profile__email"
                                placeholder="pochta@yandex.ru" type="e-mail"
                                name="email"
                                required
                                autoComplete="on" />
                        </div>

                    </fieldset>
                    <button onClick={handleEditForm} className="form-profile__submitBtn" type={edit ? "button" : "submit"} value={edit ? "Редактировать" : "Сохранить"}>
                        {edit ? "Редактировать" : "Сохранить"}
                    </button>
                <Link className="form-profile__register" to="/signout">Выйти из аккаунта</Link>
                </form>
                </div>
            </section>
        </>
    )
}


export default Profile;
