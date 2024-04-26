import avatar from "../../images/Avatar.svg";
import "./SideBar.css";

const SideBar = ({ name, avatar, onEditProfileModal, logOffProfile }) => {
  console.log(name);
  return (
    <section>
      <div className="sidebar__info">
        <img src={avatar} alt="avatar" className="sidebar__avatar"></img>

        <p className="sidebar__name">{name}</p>
      </div>
      <div className="sidebar__buttons">
        <button
          className="sidebar__edit-info"
          type="text"
          onClick={onEditProfileModal}
        >
          Change profile data
        </button>
        <button
          className="sidebar__log-off"
          type="text"
          onClick={logOffProfile}
        >
          Log out
        </button>
      </div>
    </section>
  );
};

export default SideBar;
