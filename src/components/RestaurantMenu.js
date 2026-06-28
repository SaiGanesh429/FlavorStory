import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import restaurantMenuData from "../utils/restaurantMenu.json";
import "./RestaurantMenu.css";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
;

const RestaurantMenu = () => {

    const [restaurantMenuList, setRestaurantMenuList] = useState(null);

    useEffect(() => {
        fetchRestaurantData();
    }, []);


    const fetchRestaurantData = async () => {
        setRestaurantMenuList(restaurantMenuData['data']);
    }

    //   const fetchRestaurantData = async () => {
    //     try {
    //       const corsProxy = "https://corsproxy.io/?";
    //       const SwiggyAPI =
    //         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3985656&lng=78.3934657&restaurantId=1054154&catalog_qa=undefined&submitAction=ENTER";
    //       const response = await fetch(corsProxy + SwiggyAPI);
    //       const data = await response.json();
    //       console.log(data,"Restaurant Menu Data");
    //     //   const restaurantAPIData =
    //     //     data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    //     //   setRestaurantList(restaurantAPIData);
    //     //   setFilteredRestaurants(restaurantAPIData);
    //     } catch (error) {
    //     //   console.warn("Error fetching restaurant data (using mock data):", error);
    //     //   // fallback to local mock data in dev so UI remains visible
    //     //   setRestaurantList(restaurantAPIData);
    //     //   setFilteredRestaurants(restaurantAPIData);
    //     }


    //     };



    const { resId } = useParams();

    console.log(resId)

    if (!restaurantMenuList) {
        return <div className="restaurant-menu-container">Restaurant not found</div>;
    }

    if (restaurantMenuList === null) return <Shimmer />;

    console.log("Restaurant Menu List:", restaurantMenuList);
    
    const {
        name,
        cloudinaryImageId,
        avgRating,
        totalRatingsString,
        cuisines,
        costForTwo,
        locality,
        areaName,
        aggregatedDiscountInfo
    } = restaurantMenuList?.cards[2]?.card?.card?.info;



    const itemCards = restaurantMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;

    return (
        <div className="restaurant-menu-container">
            {/* Restaurant Header */}
            <div className="restaurant-header">
                <img
                    src={CDN_URL + cloudinaryImageId}
                    alt={name}
                    className="restaurant-hero-image"
                />
                <div className="restaurant-header-overlay"></div>
            </div>

            {/* Restaurant Info Section */}
            <div className="restaurant-info-wrapper">
                <div className="restaurant-info">
                    <div className="restaurant-title-section">
                        <h1 className="restaurant-name">{name}</h1>
                        <div className="restaurant-meta">
                            <span className="rating-badge">
                                ⭐ {avgRating} ({totalRatingsString} ratings)
                            </span>
                        </div>
                    </div>

                    {/* Location and Cuisines */}
                    <div className="restaurant-details-grid">
                        <div className="detail-item">
                            <span className="detail-label">📍 Location</span>
                            <p className="detail-value">
                                {areaName}, {locality}
                            </p>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">🍽️ Cuisines</span>
                            <p className="detail-value">{cuisines.join(", ")}</p>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">💰 Cost</span>
                            <p className="detail-value">{costForTwo}</p>
                        </div>
                    </div>

                    {/* Offers Section */}
                    {aggregatedDiscountInfo && (
                        <div className="offers-section">
                            <div className="offer-card">
                                <h3 className="offer-header">{aggregatedDiscountInfo.header}</h3>
                                <p className="offer-subheader">
                                    {aggregatedDiscountInfo.descriptionList?.[0]?.meta ||
                                        aggregatedDiscountInfo.shortDescriptionList?.[0]?.meta ||
                                        "Special offers available"}
                                </p>
                                <span className="offer-badge">🎁 Special Offer</span>
                            </div>
                            <div className="offer-card">
                                <h3 className="offer-header">🚚 FREE DELIVERY</h3>
                                <p className="offer-subheader">On orders above ₹50</p>
                                <span className="offer-badge">Limited Time</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Menu Section */}
            <div className="menu-section">
                <h2 className="menu-title">Menu Items</h2>
                <div className="menu-grid">
                    {itemCards.map((item) => {
                        const info = item.card?.info || {};
                        const seed = info.id || info.name || Math.random().toString(36).slice(2, 8);
                        const imageUrl = info.imageId
                            ? CDN_URL + info.imageId
                            : `https://picsum.photos/seed/${encodeURIComponent(seed)}/600/400`;
                        const rating = info?.ratings?.aggregatedRating?.rating ?? info?.avgRating ?? "-";
                        const price = (info?.price ?? info?.defaultPrice ?? 0) / 100;

                        return (
                            <div key={info.id || seed} className="menu-card">
                                <div className="menu-card-image">
                                    <img src={imageUrl} alt={info.name || "menu item"} />
                                    <span className="menu-rating">⭐ {rating}</span>
                                </div>
                                <div className="menu-card-content">
                                    <h3 className="menu-item-name">{info.name}</h3>
                                    <p className="menu-item-description">{info.description}</p>
                                    <div className="menu-item-footer">
                                        <span className="menu-item-price">₹{price}</span>
                                        <button className="add-to-cart-btn">Add to Cart</button>
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
