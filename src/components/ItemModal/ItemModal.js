import React from "react";
import "./ItemModal.css";
import close from "../../images/close item.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `modal__item-delete ${
    isOwn ? "modal__item-delete-visible" : "modal__item-delete-hidden"
  }`;
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(selectedCard._id);
  };
  return (
    <div className={"modal"}>
      <div className="modal__item-content">
        <button className="modal__item-close" type="button" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <img
          className="modal__image"
          alt={selectedCard.name}
          src={selectedCard.imageUrl}
        />
        <div className="modal__image-name">{selectedCard.name}</div>
        <div className="modal__image-weather-type">
          Weather: {selectedCard.weather}
        </div>
        <button
          className={itemDeleteButtonClassName}
          onClick={handleDelete}
          type="button"
        >
          Delete item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
