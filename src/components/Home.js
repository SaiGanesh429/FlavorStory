import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";
import CardList from "./CardList";
import "./Home.css";
import Shimmer from "./Shimmer";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const filterRestaurants = (searchText) => {
    const filteredRestaurants = restaurantList.filter((restaurant) => {
      const name = restaurant?.info?.name || "";
      return name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredRestaurants);
  };

  const handleTopRated = () => {
    const filteredRestaurants = restaurantList.filter((restaurant) => {
      const rating = restaurant?.info?.avgRating;
      if (typeof rating === "number") return rating >= 4;
      const parsed = parseFloat(rating);
      return !Number.isNaN(parsed) && parsed >= 4;
    });
    setFilteredRestaurants(filteredRestaurants);
  };

  const handleReset = () => {
    setFilteredRestaurants(restaurantList);
  };

  const fetchRestaurantData = async () => {
    try {
      const corsProxy = "https://corsproxy.io/?";
      const SwiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      const response = await fetch(corsProxy + SwiggyAPI);
      const data = await response.json();
      const restaurantAPIData =
        data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setRestaurantList(restaurantAPIData);
      setFilteredRestaurants(restaurantAPIData);
    } catch (error) {
      console.warn("Error fetching restaurant data (using mock data):", error);
      // fallback to local mock data in dev so UI remains visible
      setRestaurantList(restaurantAPIData);
      setFilteredRestaurants(restaurantAPIData);
    }
  };

  const getOnlineStatus = useOnlineStatus();

if(!getOnlineStatus) return <h1>Looks like  you are offLine... You do have an active internet connection </h1>

    // Conditional Rendering
    return restaurantList.length === 0 ? (
      // Show shimmer effect while data is loading
      <Shimmer />
    ) : (
      <div>
        <div className="home-page-body">
          <div className="search-actions-row">
            <div className="search-box">
              <span className="search-icon">🍲</span>
              <input
                type="text"
                placeholder="Search restaurants, cuisines, or dishes"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  filterRestaurants(e.target.value);
                }}
              />
            </div>
            <div className="button-wrapper">
              <button className="top-rated-btn" onClick={handleTopRated}>
                Top Rated
              </button>
              <button className="reset-btn" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
          <CardList restaurants={filteredRestaurants} />
        </div>
      </div>
    );
};

export default Home;
