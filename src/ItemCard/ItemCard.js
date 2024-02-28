import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card__name">{item.name}</div>
      <div>
        <img
          className="card__image"
          src={item.link}
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
