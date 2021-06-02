import React, { useEffect } from 'react';
// import filmPict from '../../images/film_pict.jpg';
import './MoviesCard.css';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function MovieCard(props) {
    // const currentUser = React.useContext(CurrentUserContext);

    const [like, setLike] = React.useState(false);

    function handleLike(e) {
        if (like) {
            // setLike(false);
            isLiked = false
            setLike(false)
            props.onDisLike(props.nameEN);
        }
        else {
            // setLike(true);
            isLiked = true
            setLike(true)
            props.onLike(props.id);
        }
    }


    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + " ч " + rminutes + " мин";
    }

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    let isLiked = props.userMovies.some(i => i.nameEN === props.nameEN)


    const testLike = React.useCallback(() => {
        if (isLiked) {
            setLike(isLiked)
        }
    }, [isLiked])

    useEffect(() => {
        testLike();
    }, [testLike])


    return (
        <article className="movieCard">
            <a target="_blank"
                rel="noopener noreferrer"
                href={props.trailerLink}>
                <img
                    src={props.image ? 'https://api.nomoreparties.co' + props.image.url : ""}
                    alt={props.image ? props.image.name : ""}
                    className="movieCard__image" />
            </a>
            <div className="movieCard__title">
                <div className="movieCard__like-wrapper">
                    <h2 className="movieCard__name">{props.nameRU}</h2>
                    <button type="button" className={like ? "MovieLikeButtonClassName" : "MovieLikeButtonGray"} onClick={handleLike} />
                    {/* <button type="button" className="MovieLikeButtonGray" /> */}
                </div>
                <p className="movieCard__length">{timeConvert(props.duration)}</p>
            </div>
        </article>
    );
}


export default MovieCard;