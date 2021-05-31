import React from 'react';
import './Profile.css';
import Header from '../HeaderAuth/HeaderAuth';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // Redirect,
    // useHistory
} from "react-router-dom";
// import logo from '../../images/logo.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useForm'




function Profile(props) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const currentUser = React.useContext(CurrentUserContext);
    // console.log('profile current user', currentUser)

    // const [email, setEmail] = React.useState('');
    // const [name, setName] = React.useState('');
    const [edit, setEdit] = React.useState(true);


    function handleEditForm(e) {
        setEdit(!edit);
        console.log(edit)

    }
    // function handleChangeEmail(e) {
    //     setEmail(e.target.value);
    //     console.log(name)

    // }
    // function handleChangeName(e) {
    //     setName(e.target.value);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(values.name, values.email);
    }

    return (
        <section className="Profile">
            <Header />
            <div className="Profile__form-wrapper">
                <form onSubmit={handleSubmit} className='form-profile' name='form-profile'>
                    <h2 className="form-profile__head">{'Привет,' + currentUser.name + '!'}</h2>
                    <fieldset disabled={edit} className="form-profile__contact-wrapper">
                        <div className="form-profile__wrapper">
                            <p className="form-profile__email-holder">Имя</p>
                            <input
                                value={values.name || ''}
                                onChange={handleChange}
                                type="text"
                                id="name"
                                className="form-profile__email"
                                placeholder={currentUser.name}
                                name="name"
                                required
                                autoComplete="off"
                                minLength="2"

                            />

                        </div>
                            <span className="form-error" id="register-form-error">
                                {errors.name || ''}
                            </span>
                        <div className="form-profile__wrapper">

                            <p className="form-profile__email-holder">E-mail</p>
                            <input
                                value={values.email || ''}
                                onChange={handleChange}
                                id="email"
                                className="form-profile__email"
                                placeholder={currentUser.email} type="email"
                                name="email"
                                required
                                autoComplete="on" />
                        </div>
                        <span className="form-error" id="email-form-error">
                            {errors.email || ''}
                        </span>


                    </fieldset>
                    <button disabled={!isValid && !edit} onClick={edit ? handleEditForm : handleSubmit} className="form-profile__submitBtn" type={edit ? "button" : "submit"} value={edit ? "Редактировать" : "Сохранить"}>
                        {edit ? "Редактировать" : "Сохранить"}
                    </button>
                    <Link to="/" className="form-profile__register" onClick={props.handleSignout}>Выйти из аккаунта</Link>
                </form>
            </div>
        </section>
    )
}


export default Profile;
