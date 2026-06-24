import Card from "./Card";

import defaultRestaurantList from "../utils/mockData";

const CardList = ({ restaurants = defaultRestaurantList }) => {
  return (
    <div className="card-container">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default CardList;
