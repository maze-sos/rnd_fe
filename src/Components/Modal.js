import React from 'react';
import '../Css/Modal.css'; // Make sure to create this CSS file for modal styling

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt="Receipt" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
