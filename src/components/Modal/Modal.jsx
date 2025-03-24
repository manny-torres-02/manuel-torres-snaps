import React from "react";
import "./modal.scss";

const Modal = ({ errorMessage, showModal, close }) => {
  if (!showModal || showModal === false) {
    return null;
  }

  return (
    <div className="modal__overlay">
      <div className="modal__text">
        <h2>
          Please double check the form fields and make sure they are filled in
          correctly
        </h2>
        <p>{errorMessage}</p>
        <button className="modal-close-button" onClick={close}>
          {" "}
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
