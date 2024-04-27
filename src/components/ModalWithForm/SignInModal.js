import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const SignInModal = ({ isOpen, handleCloseModal, handleSignIn }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(values);
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log In"
      buttonText2="or Sign Up"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Email</label>
      <input
        type="email"
        required
        name="email"
        value={values.email}
        className="modal__input"
        placeholder="Email"
        onChange={handleChange}
      />

      <label className="modal__label">Password</label>
      <input
        type="password"
        name="password"
        value={values.password}
        className="modal__input"
        placeholder="Password"
        onChange={handleChange}
      />
    </ModalWithForm>
  );
};

export default SignInModal;
