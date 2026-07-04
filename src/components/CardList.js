import { Link } from "react-router-dom";
import defaultRestaurantList from "../utils/mockData";
import Card, { withPromotedLabel } from "./Card";

const PromotedRestaurantCard = withPromotedLabel(Card);


const CardList = ({ restaurants  }) => {
  return (
    <div className="card-container">
      {restaurants.map((restaurant) => (
        <Link key={restaurant.card.card.info.id} to={`/restaurant/${restaurant.card.card.info.id}`}>
          {restaurant.card.card.info.promoted ? (
            <PromotedRestaurantCard resData={restaurant} />
          ) : (
            <Card resData={restaurant} />
          )
          }
        </Link>
      ))}
    </div>
  );
};

export default CardList;
