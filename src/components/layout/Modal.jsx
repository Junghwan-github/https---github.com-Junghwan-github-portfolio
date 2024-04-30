import React from "react";
import { useModal } from "./ModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const Modal = () => {
  const { closeModal } = useModal();

  return (
    <div className="modal-container">
      <div className="modal-content">
        <FontAwesomeIcon icon={faTimes} onClick={closeModal} className="modal-close" />
        <div>
          <h1>테스트</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;