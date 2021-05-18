import React from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Techs(props) {

    return (
        <section className="techs">
            <h2 className="techs__header">Технологии</h2>
                    <h3 className="techs__subhead">7 технологий</h3>
                    <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="tech_technologies">
                    <li className="techs__technology">HTML</li>
                    <li className="techs__technology">CSS</li>
                    <li className="techs__technology">JS</li>
                    <li className="techs__technology">React</li>
                    <li className="techs__technology">Git</li>
                    <li className="techs__technology">Express.js</li>
                    <li className="techs__technology">mongoDB</li>
                </ul>

        </section>
    );
}

export default Techs


