import React from 'react';
import Transition from 'react-transition-group/Transition'

import './Modal.css';

const modal = ({  show, closed }) => {
    let cssClasses = [
        'Modal',
    ];

    return (
        <Transition
            mountOnEnter
            unmountOnExit
            in={show}
            timeout={300}>
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