import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, handleCloseModal, handleSignUp }) => {
  const [values, setValues] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(values);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      buttonText2="or Log In"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Email*</label>
      <input
        type="email"
        name="email"
        value={values.email}
        className="modal__input"
        placeholder="Email"
        onChange={handleChange}
      />

      <label className="modal__label">Password*</label>
      <input
        type="password"
        name="password"
        value={values.password}
        className="modal__input"
        placeholder="Password"
        onChange={handleChange}
      />

      <label className="modal__label">Name *</label>
      <input
        type="text"
        name="name"
        value={values.name}
        className="modal__input"
        placeholder="Name"
        onChange={handleChange}
      />

      <label className="modal__label">Avatar URL *</label>
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

export default RegisterModal;
