import React from 'react';
import './Switch.css';

const Switch = ({ isOn, handleToggle }) => {
    return (
        <>
            <div className="switch__wrapper">
                <div className="switch_switch">
                    <input
                        checked={isOn}
                        onChange={handleToggle}
                        className="react-switch-checkbox"
                        id={`react-switch-new`}
                        type="checkbox"
                    />
                    <label
                        style={{ background: isOn && '#06D6A0' }}
                        className="react-switch-label"
                        htmlFor={`react-switch-new`}
                    >
                        <span className={`react-switch-button`} />
                    </label>
                </div>
                <p className="switch__text">Короткометражки</p>
            </div>
            <div className="switch__line"></div>
        </>
    );
};

export default Switch;
