import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({
  onCreateModal,
  onSelectCard,
  clothingItems,
  name,
  avatar,
  onEditProfileModal,
  onCardLike,
  logOffProfile,
}) => {
  return (
    <main className="profile__main">
      <SideBar
        name={name}
        avatar={avatar}
        onEditProfileModal={onEditProfileModal}
        logOffProfile={logOffProfile}
      />
      <ClothesSection
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
        onCardLike={onCardLike}
      />
    </main>
  );
};

export default Profile;
