import Header from "./Header";
import CardList from "./CardList";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="button-wrapper">
        <button className="top-rated-btn">Top Rated Restaurants</button>
      </div>
      <CardList />
    </div>
  );
};

export default Home;