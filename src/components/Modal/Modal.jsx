import React from "react";
import "./modal.scss";

const Modal = ({ errorMessage, showModal, close }) => {
  // check the status of the modal and do not show it if it is false
  if (!showModal || showModal === false) {
    return null;
  }

  return (
    <div className="modal__overlay">
      <div className="modal__text">
        <h2>Form fields are not filled in correctly</h2>
        <p>{errorMessage}</p>
        <button className="modal-close-button"onClick={close}> close</button>
      </div>

    </div>
  );
};

export default Modal;
