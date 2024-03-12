import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [link, setLink] = useState("");
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link });
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="app__name">
        Name
      </label>

      <input
        className="app__name-input"
        placeholder="Name"
        type="text"
        name="name"
        id="name"
        minLength="1"
        maxLength="30"
        value={name}
        onChange={handleNameChange}
      />

      <label htmlFor="link" className="app__url">
        Image
      </label>

      <input
        className="app__image-input"
        placeholder="Image URL"
        type="url"
        name="link"
        id="link"
        minLength="1"
        maxLength="100"
        value={link}
        onChange={handleLinkChange}
      />
      <p>Select the weather type:</p>
      <div className="app__buttons">
        <div>
          <input name="radio" type="radio" id="hot" value="hot" />
          <label htmlFor="hot">Hot</label>
        </div>
        <div>
          <input name="radio" type="radio" id="warm" value="warm" />
          <label htmlFor="warm">Warm</label>
        </div>
        <div>
          <input name="radio" type="radio" id="cold" value="cold" />
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
