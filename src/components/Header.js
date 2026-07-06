import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";
import DefaultContexts from "../utils/custom_contexts/default_contexts";



//This useEffect will execute after the component get rendered.
const Header = () => {
  const { loggedInUser, setUserName, handleUserNameChange } = useContext(DefaultContexts);
  const [logInLogOutBtn, setLogInLogOutBtn] = useState("Login");
  const flavorStoryImg = new URL("../assets/flavorStory.jpeg", import.meta.url);
  const getOnlineStatus = useOnlineStatus();

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
          <h1>Flavor Story <span>{getOnlineStatus ? "🟢" : "🔴"}</span></h1>
          <p>Fresh eats and local favorites delivered fast.</p>
        </div>
      </div>

      <div className="header-actions">
        <div className="nav-item">  <Link to="/">Home</Link></div>
        <div className="nav-item"> <Link to="/contact">Contact</Link></div>
        <div className="nav-item"> <Link to="/about">About</Link> </div>
        <div className="nav-item"> <Link to="/grocery">Grocery</Link> </div>
        <div className="nav-item"> {loggedInUser} </div>
        <div className="nav-item"> <label> Set User Name: <input type="text" placeholder="Enter your name"
          value={loggedInUser} onChange={(e) => setUserName(e.target.value)} /> </label> </div>
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
