import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({
  onCreateModal,
  onSignUpModal,
  onSignInModal,
  name,
  avatar,
  isLoggedIn,
  city,
}) => {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__info">
          {currentDate}, {city}
        </div>
      </div>
      <div className="header__user-info">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <div>
              <button
                type="text"
                onClick={onCreateModal}
                className="header__button"
              >
                + Add clothes
              </button>
            </div>
            <Link to="/profile">
              <button type="text" className="header__username">
                {name}
              </button>
            </Link>
            {avatar ? (
              <>
                <img
                  className="header__avatar-logo"
                  src={avatar}
                  alt="Profile Image"
                />
              </>
            ) : (
              <>
                <div className="header__avatar-logo">{name}</div>
              </>
            )}
          </>
        ) : (
          <>
            <button
              type="text"
              onClick={onSignUpModal}
              className="header__signUp"
            >
              Sign Up
            </button>
            <button
              type="text"
              onClick={onSignInModal}
              className="header__signIn"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
