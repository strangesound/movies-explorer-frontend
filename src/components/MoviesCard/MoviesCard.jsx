import React from 'react';
import filmPict from '../../images/film_pict.jpg';
import './MoviesCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function MovieCard(props) {
    // function handleClick() {
    //     props.onCardClick(true, props.link, props.name)
    // }
    // // console.log(props)
    // function handleTrashBtnClick() {
    //     props.onCardDelete(props)
    // }
    function handleLikeClick() {
        props.onCardLike(props)
    }
    // const currentUser = React.useContext(CurrentUserContext);
    // // console.log(props)
    // // Определяем, являемся ли мы владельцем текущей карточки
    // const isOwn = props.owner._id === currentUser._id;

    // // Создаём переменную, которую после зададим в `className` для кнопки удаления
    // const cardDeleteButtonClassName = (
    //     `movieCard__delete-btn ${isOwn ? '' : 'display'}`
    // );

    // // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    // const isLiked = props.likes.some(i => i._id === currentUser._id);

    // // Создаём переменную, которую после зададим в `className` для кнопки лайка
    // const cardLikeButtonClassName = `movieCard__like ${isLiked ? 'movieCard__like_active' : ''}`;

    return (
        <article className="movieCard">
            <img src={filmPict} alt="111" className="movieCard__image" />
            <div className="movieCard__title">
                <div className="movieCard__like-wrapper">
                    <h2 className="movieCard__name">33 слова о дизайне</h2>
                    <button type="button" className="MovieLikeButtonClassName" onClick={handleLikeClick} />
                </div>
                <p className="movieCard__length">1ч42м</p>
            </div>
        </article>
    );
}


export default MovieCard;