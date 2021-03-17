import React from 'react';
import Transition from 'react-transition-group/Transition'

import './Modal.css';

// time in ms to transition
const animationTiming = {
    enter: 1000,
    exit: 1000,
};

const modal = ({  show, closed }) => {
    let cssClasses = [
        'Modal',
    ];

    return (
        <Transition
            mountOnEnter
            unmountOnExit
            in={show}
            timeout={animationTiming}>
            {
                state => {
                    cssClasses = [
                        'Modal',
                        state === 'entering'
                        ? 'ModalOpen'
                        : state === 'exiting' ? 'ModalClosed' : null
                    ];

                    return (
                        <div className={cssClasses.join(' ')}>
                            <h1>A Modal with animation this time!</h1>
                            <button className="Button" onClick={closed}>Dismiss</button>
                        </div>
                    );
                }
            }
            
        </Transition>
    );
};

export default modal;