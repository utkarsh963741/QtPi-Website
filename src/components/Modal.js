import React from "react";
import './Modal.css'

const Modal = (props) => {

  return (
    <div className={props.show? "modal-container show" :   "modal-container hide"}>
        <div className="modal-content">
                {props.children}
            <i className="close-icon fas fa-times" onClick={props.handleClose}></i>
        </div>
    </div>
  );
};

export default Modal;