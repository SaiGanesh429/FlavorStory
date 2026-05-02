import Card from "./Card";

import restaurantList from "../utils/mockData";

const CardList = () => {
  return (
    <div className="card-container">
      {restaurantList.map((restaurant) => (
        <Card key={restaurant.card.card.info.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default CardList;
