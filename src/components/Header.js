import { LOGO_URL } from "../utils/constants";

const flavorStoryImg = new URL("../assets/flavorStory.jpeg", import.meta.url);

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <img
          className="logo"
          src={flavorStoryImg}
          alt="Flavor Story logo"
          onError={(event) => {
            event.currentTarget.src =LOGO_URL;
          }}
        />
        <div className="brand-text">
          <h1>Flavor Story</h1>
          <p>Fresh eats and local favorites delivered fast.</p>
        </div>
      </div>

      <div className="search-box">
        <span className="search-icon">🍲</span>
        <input
          type="text"
          placeholder="Search restaurants, cuisines, or dishes"
        />
      </div>

      <div className="header-actions">
        <div className="nav-item">Home</div>
        <div className="nav-item">Contact</div>
        <div className="nav-item">About</div>
        <div className="nav-item cart-pill">
          Cart <span className="cart-count">3</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
