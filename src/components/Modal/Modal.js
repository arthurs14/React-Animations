import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition'

import './Modal.css';

// time in ms to transition
const animationTiming = {
    enter: 1000,
    exit: 1000,
};

const modal = ({  show, closed }) => {
    // Only need this if you are using Transition along with writing a state
    // Function
    // let cssClasses = [
    //     'Modal',
    // ];

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={show}
            timeout={animationTiming}
            classNames="fade-slide">
                <div className="Modal">
                    <h1>A Modal with animation this time!</h1>
                    <button className="Button" onClick={closed}>Dismiss</button>
                </div>
        </CSSTransition>
    );
};

export default modal;