import { Link } from "react-router-dom";
import defaultRestaurantList from "../utils/mockData";
import Card from "./Card";

const CardList = ({ restaurants = defaultRestaurantList }) => {
  return (
    <div className="card-container">
      {restaurants.map((restaurant) => (
        <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
          <Card resData={restaurant} />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
