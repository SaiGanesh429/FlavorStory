import { CDN_URL } from "../utils/constants";
import "./RestaurantMenu.css";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../utils/react-state-management/cartSlice.js";
import { useParams } from "react-router-dom";

const RestaurantMenu = ({ menuItems }) => {
    const params = useParams();
    console.log("qq", params, params == {})
    const dispatchFn = useDispatch();

    const handleAddToCart = (item) => {

        dispatchFn(addItemToCart(item));
    };

    if (menuItems === null) return <Shimmer />;

    const safeMenuItems = Array.isArray(menuItems) ? menuItems : [];

    if (!safeMenuItems.length) {
        return <div className="restaurant-menu-container"><div className="menu-empty-state">No dishes available right now.</div></div>;
    }

    return (
        <div className="restaurant-menu-container">
            <div className="menu-section">
                <div className="menu-grid">
                    {safeMenuItems.map((item) => {
                        const info = item?.card?.info || item || {};
                        const seed = info.id || info.name || item.name || Math.random().toString(36).slice(2, 8);
                        const imageUrl = info.imageId
                            ? CDN_URL + info.imageId
                            : `https://picsum.photos/seed/${encodeURIComponent(seed)}/600/400`;
                        const rating = info?.ratings?.aggregatedRating?.rating ?? info?.avgRating ?? "-";
                        const price = (info?.price ?? info?.defaultPrice ?? 0) / 100;

                        return (
                            <div key={info.id || seed} className="menu-card">
                                <div className="menu-card-content">
                                    <div className="menu-card-copy">
                                        <div className="menu-card-top">
                                            <h3 className="menu-item-name">{info.name}</h3>
                                            <span className="menu-item-rating">⭐ {rating}</span>
                                        </div>
                                        <p className="menu-item-description">{info.description}</p>
                                        <div className="menu-item-footer">
                                            <div className="menu-item-price-block">
                                                <span className="menu-item-price">₹{price}</span>
                                                <span className="menu-item-subtle">Chef’s special</span>
                                            </div>
                                            {params?.resId  && (
                                                <button className="add-to-cart-btn" onClick={() => handleAddToCart(info)}>
                                                    Add
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="menu-card-image">
                                        <img src={imageUrl} alt={info.name || "menu item"} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
