import React from 'react';

// import logo from '../images/mesto-logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__body">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__wrapper">
                <p className="footer__copyright">© 2021</p>
                <ul className="footer__links">
                    <li className="footer__link"><a target="_blank" rel="noopener noreferrer" href="https://praktikum.yandex.ru" className="footer__linkkkk">Яндекс.Практикум</a></li>
                    <li className="footer__link"><a target="_blank" rel="noopener noreferrer" href="https://github.com/strangesound" className="footer__linkkkk">Github</a></li>
                    <li className="footer__link"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=1736002390" className="footer__linkkkk">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer