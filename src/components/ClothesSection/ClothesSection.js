import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ onCreateModal, onSelectCard, clothingItems }) => {
  return (
    <section className="clothes__section">
      <div className="clothes__section-header">
        <p className="clothes__section-title">Your items</p>
        <div>
          <p
            className="clothes__section-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add new
          </p>
        </div>
      </div>
      <div className="clothes__section-cards">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
        ))}
      </div>
    </section>
  );
};

export default ClothesSection;
