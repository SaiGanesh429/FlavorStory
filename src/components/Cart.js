import { useDispatch, useSelector } from "react-redux";
import RestaurantMenu from "./RestaurantMenu";
import { clearCart } from "../utils/react-state-management/cartSlice.js";

const Cart = () => {
    // Get the dispatch function from Redux
    const dispatch = useDispatch();
    // Access cart items from the Redux store
    const cartItems = useSelector((store) => store.cart.items);

    // Function to handle clearing the cart
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h2 className="text-2xl font-bold m-5 p-5 text-center">Cart</h2>
            <button className="clear-cart-btn" onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Add Items to Your Cart!</p>
            ) : (
                <RestaurantMenu menuItems={cartItems} />
            )}
        </div>
    );
};

export default Cart;