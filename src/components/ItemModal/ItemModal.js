import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={"modal"}>
      <div className="modal__item-content">
        <button className="modal__item-close" type="button" onClick={onClose}>
          <img
            src={require("../../images/close item.svg").default}
            alt="close"
          />
        </button>
        <img className="modal__image" src={selectedCard.link} />

        <div className="modal__image-name">{selectedCard.name}</div>
        <div className="modal__image-weather-type">
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
