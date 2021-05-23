// import edit from '../images/edit.svg';
import React, {useState}  from 'react';
import Switch from '../Switch/Switch';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function SearchForm(props) {
    const [value, setValue] = useState(false);


    // const currentUser = React.useContext(CurrentUserContext);

    return (
        <section className="searchformSection">
            <form className="searchform">
                <input name="Поиск фильма" type="text" required className="searchform__search-field" placeholder="Фильм">

                </input>
                <button type="submit" className="searchform__btn">Найти</button>
            </form>
            <Switch
                isOn={value}
                handleToggle={() => setValue(!value)}
            />
        </section>
    );
}

export default SearchForm


