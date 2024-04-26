import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({
  onCreateModal,
  onSelectCard,
  clothingItems,
  onCardLike,
}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const filteredClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );
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
        {filteredClothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onSelectCard={onSelectCard}
            onCardLike={onCardLike}
          />
        ))}
      </div>
    </section>
  );
};

export default ClothesSection;
