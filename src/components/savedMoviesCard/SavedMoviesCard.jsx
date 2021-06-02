import React from 'react';
// import filmPict from '../../images/film_pict.jpg';
import '../MoviesCard/MoviesCard';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function SavedMovieCard(props) {
// console.log('SavedMovieCard', props)

function dislikeMovie(){
    props.onDisLike(props._id)
}    

    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + " ч " + rminutes + " мин";
    }

    return (
        <article className="movieCard">
            <a target="_blank"
                rel="noopener noreferrer"
                href={props.trailerLink}>
                <img
                    src={props.image}
                    alt={props.nameRU}
                    className="movieCard__image" />
            </a>
            <div className="movieCard__title">
                <div className="movieCard__like-wrapper">
                    <h2 className="movieCard__name">{props.nameRU}</h2>
                    <button type="button" className="MovieDislLikeButton" onClick={dislikeMovie} />
                </div>
                <p className="movieCard__length">{timeConvert(props.duration)}</p>
            </div>
        </article>
    );
}


export default SavedMovieCard;