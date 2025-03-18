import './modal.css';


const Modal = ({ handleCloseClick }) => {
    return (
        <div className="modal-container">
            <div className="modal-content">
                Employee Created!
                <button className="modal-close-btn" onClick={handleCloseClick} aria-label="Close modal">
                    ✖
                </button>
            </div>        
        </div>
    );
};

export default Modal;
