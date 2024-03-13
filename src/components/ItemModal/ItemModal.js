import "./ItemModal.css";
import close from "../../images/close item.svg";

const ItemModal = ({ selectedCard, onClose }) => {
  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   onDelete(selectedCard._id);
  // };
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
        <button
          className="modal__item-delete"
          // onClick={handleDelete}
          type="button"
        >
          Delete item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
