import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import restaurantList from "../utils/mockData";
import { Link } from "react-router-dom";

const flavorStoryImg = new URL("../assets/flavorStory.jpeg", import.meta.url);

const Header = () => {
  const [logInLogOutBtn, setLogInLogOutBtn] = useState("Login");

  return (
    <div className="header">
      <div className="brand">
        <img
          className="logo"
          src={flavorStoryImg}
          alt="Flavor Story logo"
          onError={(event) => {
            event.currentTarget.src = LOGO_URL;
          }}
        />
        <div className="brand-text">
          <h1>Flavor Story</h1>
          <p>Fresh eats and local favorites delivered fast.</p>
        </div>
      </div>

      <div className="header-actions">
        <div className="nav-item">  <Link to="/">Home</Link></div>
        <div className="nav-item"> <Link to="/contact">Contact</Link></div>
        <div className="nav-item"> <Link to="/about">About</Link> </div>
        <div className="header-end">
          <div className="nav-item cart-pill">
            Cart <span className="cart-count">3</span>
          </div>
          <button
            className="nav-item auth-btn"
            onClick={() => {
              setLogInLogOutBtn((s) => (s === "Login" ? "Logout" : "Login"));
            }}
            aria-pressed={logInLogOutBtn === "Logout"}
          >
            {logInLogOutBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
