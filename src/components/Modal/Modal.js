import React from 'react';

import './Modal.css';

const modal = ({  show, closed }) => {
    const cssClasses = ['Modal', show ? 'ModalOpen' : 'ModalClosed']
    return (
        <div className={cssClasses.join(' ')}>
            <h1>A Modal with animation this time!</h1>
            <button className="Button" onClick={closed}>Dismiss</button>
        </div>
    );
};

export default modal;