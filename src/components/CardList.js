import Card, { withPromotedLabel } from "./Card";

const PromotedRestaurantCard = withPromotedLabel(Card);

const CardList = ({ restaurants }) => {
  return (
    <div className="card-container">
      {restaurants.map((restaurant) => {
        const info = restaurant?.card?.card?.info;
        if (!info) return null;

        const cardKey = info.id;
        const CardComponent = info.promoted ? PromotedRestaurantCard : Card;

        return <CardComponent key={cardKey} resData={restaurant} />;
      })}
    </div>
  );
};

export default CardList;
