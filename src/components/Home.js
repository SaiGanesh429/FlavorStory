import Header from "./Header";
import CardList from "./CardList";
import "./Home.css";
import { useEffect, useState } from "react";
import restaurantData from "../utils/mockData";
import Shimmer from "./Shimmer";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const handleTopRated = () => {
    const filteredRestaurants = restaurantList.filter((restaurant) => {
      const rating = restaurant?.info?.avgRating;
      if (typeof rating === "number") return rating >= 4;
      const parsed = parseFloat(rating);
      return !Number.isNaN(parsed) && parsed >= 4;
    });
    console.log(filteredRestaurants, "filteredRestaurants");
    setRestaurantList(filteredRestaurants);
  };

  const handleReset = () => setRestaurantList(restaurantData);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
      const data = await response.json();
      console.log(
        data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
        "external data",
      );
      setRestaurantList(
        data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
      );
    } catch (error) {
      console.warn("Error fetching restaurant data (using mock data):", error);
      // fallback to local mock data in dev so UI remains visible
      setRestaurantList(restaurantData);
    }
  };

  // Conditional Rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <Header />
      <div className="button-wrapper">
        <button className="top-rated-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <CardList restaurants={restaurantList} />
    </div>
  );
};

export default Home;
