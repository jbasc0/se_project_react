import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ isOpen, handleCloseModal, handleUpdateUser }) => {
  const [values, setValues] = useState({
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(values);
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Name *</label>
      <input
        type="text"
        name="name"
        value={values.name}
        className="modal__input"
        placeholder="Name"
        onChange={handleChange}
      />

      <label className="modal__label">Avatar *</label>
      <input
        type="url"
        name="avatar"
        value={values.avatar}
        className="modal__input"
        placeholder="Avatar URL"
        onChange={handleChange}
      />
    </ModalWithForm>
  );
};

export default EditProfileModal;
