import React, { useState } from 'react';
import './Modal.css'

/**
Represents a modal component.
@param {Object} props - The props object.
@param {boolean} props.isOpen - Determines if the modal is open or closed.
@param {Function} props.setIsOpen - A function that sets the isOpen state of the modal.
@param {Function} props.content - A function that returns the content to be displayed in the modal.
@param {string} props.title - The title of the modal.
@returns {JSX.Element} - The modal component JSX.
*/
const Modal = ({ isOpen, setIsOpen, content, title }) => {
  return (
    <>
      {isOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <button onClick={() => setIsOpen(false)} className='close'>
              X
            </button>
            <h2 className='modal-title'>{title}</h2>
            {content()}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
