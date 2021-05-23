// import edit from '../images/edit.svg';
import React from 'react';
// import brothers from '../images/brothers.png';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';


function AboutProject(props) {

    // const currentUser = React.useContext(CurrentUserContext);

    return (
        <section className="aboutProject">
            <h2 className="aboutProject__header">О проекте</h2>
            <div className="aboutProject__grid">
                <div className="aboutProject__grid-child1">
                    <h3 className="aboutProject__subhead">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__grid-child1">
                    <h3 className="aboutProject__subhead">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutProject__grid-timeline">
                <p className="aboutProject__1week">1 неделя</p>
                <p className="aboutProject__4weeks">4 недели</p>
                <p className="aboutProject__description">Back-end</p>
                <p className="aboutProject__description">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject


