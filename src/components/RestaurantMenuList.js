import { useState } from "react";
import useRestaurantMenu from "../utils/custom_hooks/useRestaurantMenu";
import RestaurantMenu from "./RestaurantMenu";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";

const RestaurantMenuList = () => {
    const restaurantMenuList = useRestaurantMenu();
    const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

    if (restaurantMenuList === null) return <Shimmer />;

    const regularCards = restaurantMenuList?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
    const cardMenuCategories = regularCards.filter((card) => {
        return card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    const toggleCategory = (index) => {
        setOpenCategoryIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="menu-categories-section">
            <div className="menu-categories-banner">
                <p className="menu-categories-eyebrow">Foodie favorites</p>
                <h2 className="menu-categories-title">Explore the menu</h2>
                <p className="menu-categories-subtitle">Tap a section to open its delicious dishes.</p>
            </div>

            <div className="menu-categories-list">
                {cardMenuCategories.map((category, index) => {
                    const categoryInfo = category?.card?.card;
                    const itemCards = Array.isArray(categoryInfo?.itemCards) ? categoryInfo.itemCards : [];
                    const isOpen = openCategoryIndex === index;

                    return (
                        <div className={`menu-category-accordion ${isOpen ? "is-open" : ""}`} key={`${categoryInfo?.id || "category"}-${index}`}>
                            <button className="menu-category-header" onClick={() => toggleCategory(index)} type="button">
                                <div>
                                    <h3 className="menu-category-name">
                                        {categoryInfo?.title} <span>({itemCards.length})</span>
                                    </h3>
                                    <p className="menu-category-copy">Freshly prepared favorites</p>
                                </div>
                                <span className="menu-category-toggle">⌄</span>
                            </button>

                            <div className="menu-category-panel">
                                <div className="menu-category-panel-inner">
                                    <RestaurantMenu menuItems={itemCards} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};



export default RestaurantMenuList;