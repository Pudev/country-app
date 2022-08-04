import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={onClose} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Details</h5>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            X
          </button>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
