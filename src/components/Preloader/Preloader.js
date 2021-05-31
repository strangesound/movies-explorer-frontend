import React from 'react'
import './Preloader.css'

const Preloader = ({ showPreloader }) => {
    return (
        <div className={showPreloader ? "preloader preloader__show" : "preloader"}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
