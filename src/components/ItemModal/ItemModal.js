import "./ItemModal.css";
import close from "../../images/close item.svg";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={"modal"}>
      <div className="modal__item-content">
        <button className="modal__item-close" type="button" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <img
          className="modal__image"
          alt={selectedCard.name}
          src={selectedCard.link}
        />
        <div className="modal__image-name">{selectedCard.name}</div>
        <div className="modal__image-weather-type">
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
