import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({ onCreateModal, onSelectCard, clothingItems }) => {
  return (
    <main className="profile__main">
      <SideBar />
      <ClothesSection
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
      />
    </main>
  );
};

export default Profile;
