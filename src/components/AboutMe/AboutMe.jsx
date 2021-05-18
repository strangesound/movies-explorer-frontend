import React from 'react';
import arseny from '../../images/arseny.jpg';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AboutMe(props) {

    return (
        <section className="aboutMe">
            <h2 className="aboutMe__header">Студент</h2>
            <div className="aboutMe_text-img-wrapper">
                <div className="aboutMe_text-wrapper">
                    <h3 className="aboutMe__subhead">Арсений</h3>
                    <h4 className="aboutMe__job">Руководитель дизайн студии petrovichbrothers.ru</h4>
                    <p className="aboutMe__text">Привет! Я работаю в дизайн студии. Люблю дизайн, программирование, математику.</p>
                    <ul className="aboutMe__contacts">
                        <li className="aboutMe__contact">Facebook</li>
                        <li className="aboutMe__contact">GitHub</li>
                    </ul>
                </div>
                <img src={arseny} alt="Арсений" className="aboutMe__arseny" />
            </div>
            <h4 className="aboutMe__portfolio">Портфолио</h4>
            <ul className="aboutMe__portfolio-links">
                <li className="aboutMe__portfolio-list-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.petrovichbrothers.ru/blogs/fb-likes-counter" className="aboutMe__portfolio-link">
                        <p className="aboutMe__portfolio-text">Счетчик для лайков FB</p>
                        <p className="aboutMe__portfolio-text">↗</p>
                    </a>
                </li>
                <li className="aboutMe__portfolio-list-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.petrovichbrothers.ru/portfolio/relocateinnopolis" className="aboutMe__portfolio-link">
                        <p className="aboutMe__portfolio-text">Сайт для Иннополиса</p>
                        <p className="aboutMe__portfolio-text">↗</p>
                    </a>
                </li>
                <li className="aboutMe__portfolio-list-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.petrovichbrothers.ru/cyberbug" className="aboutMe__portfolio-link">
                        <p className="aboutMe__portfolio-text">Набор для пайки CyberBug</p>
                        <p className="aboutMe__portfolio-text">↗</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default AboutMe


