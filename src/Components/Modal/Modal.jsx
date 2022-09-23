import { ReactComponent as CloseIcon } from "./assets/close-icon.svg";
import "./assets/Modal.css";
import PropTypes from "prop-types";

/**
 * React Component Modal
 * @param {*} param0
 * @returns Modal
 */
const Modal = ({ modalOpen, handleModal }) => {
  /**
   * close the modal on click on the close button
   */
  const handleClick = () => {
    handleModal(false);
  };

  return (
    <div
      data-testid="modal"
      id="confirmation"
      className={modalOpen ? "modal" : "modal hidden"}
    >
      <div className="modal__bg" onClick={handleClick}></div>
      <div className="modal__content">
        Employee Created!
        <span className="icon-wrapper">
          <CloseIcon className="icon icon--close" onClick={handleClick} />
        </span>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalOpen: PropTypes.bool,
  handleModal: PropTypes.func,
};

export default Modal;
