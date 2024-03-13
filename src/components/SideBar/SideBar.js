import avatar from "../../images/Avatar.svg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <section className="sidebar">
      <div>
        <img src={avatar} alt="avatar" className="sidebar__avatar"></img>
      </div>
      <p className="sidebar__name">Terrence Tegegne</p>
    </section>
  );
};

export default SideBar;
