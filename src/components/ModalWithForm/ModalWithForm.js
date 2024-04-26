import "./ModalWithForm.css";
import close from "../../images/close.svg";

const ModalWithForm = ({
  children,
  buttonText,
  buttonText2,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__form-content">
        <button className="modal__form-close" type="button" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div>
            <button className="modal__button-submit" type="submit">
              {buttonText}
            </button>
            <button className="modal__button-2" type="submit">
              {buttonText2}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
