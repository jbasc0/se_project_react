import "./Header.css";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/Logo.svg").default} alt="logo" />
        </div>
        <div className="header__info">{currentDate}, Las Vegas</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <div className="header__name">Terrence Tegegne</div>
        <div>
          <img src={require("../images/Avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};
export default Header;
