import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <div>
    <Modal
      isOpen={!!props.stateSelectedOption}
      contentLabel="test label"
      onRequestClose={props.handelClearSelected}
      className="modal"
    >
      <h3 className="modal__title">i selected for you :)</h3>
      {props.stateSelectedOption && (
        <p className="modal__body">{props.stateSelectedOption}</p>
      )}
      <button className="button" onClick={props.handelClearSelected}>
        Okey
      </button>
    </Modal>
  </div>
);

export default OptionModal;
