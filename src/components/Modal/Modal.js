import React from "react";
import "./Modal.css";

const Modal = ({ onClose, children }) => {
  return (
    <>
      <div className="darkBG" onClick={onClose} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Details</h5>
          </div>
          <button className="closeBtn" onClick={onClose}>
            X
          </button>
          <div className="modalContent">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
