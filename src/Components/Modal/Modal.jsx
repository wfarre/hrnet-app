import { ReactComponent as CloseIcon } from "./close-icon.svg";

const Modal = ({ modalOpen, handleModal }) => {
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

export default Modal;
