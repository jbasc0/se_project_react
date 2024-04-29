import React, { useState, useEffect } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const handleLike = () => {
    onCardLike(item._id, isLiked);

    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  };
  const [isLiked, setIsLiked] = useState();
  const currentUser = React.useContext(CurrentUserContext);
  // const itemLikeButtonClassName = `card__like-button ${
  //   isLiked ? "card__like-button-visible" : "card__like-button-hidden"
  // }`;
  useEffect(() => {
    if (item.likes.length > 0) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, []);
  return (
    <div>
      <div className="card__name">{item.name}</div>
      <button
        className={isLiked ? "card__like-button-visible" : "card__like-button"}
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
