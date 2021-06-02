// import edit from '../images/edit.svg';
import React from 'react';
import Switch from '../Switch/Switch';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function SearchForm(props) {
    // const [value, setValue] = useState(false);
    // searchValue={props.searchValue}
    // korotkometr={props.korotkometr}
    // console.log("search", props.searchValue)

    // const currentUser = React.useContext(CurrentUserContext);
    function search(e) {
        e.preventDefault();
        // props.setSearchValue(e.target.value);
        console.log(props.searchValue)
    }
    return (
        <section className="searchformSection">
            <form className="searchform">
                <input
                    name="Поиск фильма"
                    type="text"
                    required
                    value={props.searchValue}
                    onChange={e => props.setSearchValue(e.target.value)}
                    className="searchform__search-field"
                    placeholder={props.searchValue ? props.searchValue : "Фильм"}>

                </input>
                <button type="submit" className="searchform__btn" onClick={search}>Найти</button>
            </form>
            <Switch
                isOn={props.korotkometr}
                handleToggle={() => props.setKorotkometr(!props.korotkometr)}
            />
        </section>
    );
}

export default SearchForm


