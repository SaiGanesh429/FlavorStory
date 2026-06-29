import { useEffect, useState } from "react";

import restaurantMenuData from "./restaurantMenu.json";
const useRestaurantMenu = () => {

    const [restaurantMenuList, setRestaurantMenuList] = useState(null);

    useEffect(() => {
        fetchRestaurantData();
    }, []);


    const fetchRestaurantData = async () => {
        setRestaurantMenuList(restaurantMenuData['data']);
    }


    return restaurantMenuList;
}


export default useRestaurantMenu;