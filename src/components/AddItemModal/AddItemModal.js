import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const [radio, setRadio] = useState("");
  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link: link, weather: radio });
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
        required
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
        onChange={handleUrlChange}
        required
      />
      <p>Select the weather type:</p>
      <div className="app__buttons">
        <div>
          <input
            name="radio"
            type="radio"
            id="hot"
            value="hot"
            onChange={handleRadioChange}
          />
          <label htmlFor="hot">Hot</label>
        </div>
        <div>
          <input
            name="radio"
            type="radio"
            id="warm"
            value="warm"
            onChange={handleRadioChange}
          />
          <label htmlFor="warm">Warm</label>
        </div>
        <div>
          <input
            name="radio"
            type="radio"
            id="cold"
            value="cold"
            onChange={handleRadioChange}
          />
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
