import React from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  console.log(item._id);
  const handleLike = () => {
    onCardLike(item._id);
  };
  // const currentUser = React.useContext(CurrentUserContext);
  // const isLiked = item.likes.some((id) => id === currentUser._id);
  // const itemLikeButtonClassName = `card__like-button ${
  //   isLiked ? "card__like-button-visible" : "card__like-button-hidden"
  // }`;
  return (
    <div>
      <div className="card__name">{item.name}</div>
      <button
        className="card__like-button"
        type="button"
        onClick={handleLike}
      ></button>
      <div>
        <img
          className="card__image"
          alt={item.name}
          src={item.imageUrl}
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
