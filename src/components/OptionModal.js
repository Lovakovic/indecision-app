import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabe="Selected option"
        appElement={document.getElementById('app')}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button
            onClick={props.handleClearSelectedvOption}
        >
            Okay
        </button>
    </Modal>
)

export default OptionModal;