import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__form-content">
        <button className="modal__form-close" type="button" onClick={onClose}>
          <img src={require("../images/close.svg").default} alt="close" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form">
          {children}
          <button className="modal__button-submit" disabled type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
