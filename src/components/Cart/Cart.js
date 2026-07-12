import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/react-state-management/cartSlice.js";
import RestaurantMenu from "../RestaurantMenuList/RestaurantMenu.js";
import "./cart.css";

const Cart = () => {
    // Get the dispatch function from Redux
    const dispatch = useDispatch();
    // Access cart items from the Redux store
    const cartItems = useSelector((store) => store.cart.items);

    // Function to handle clearing the cart
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item?.price || 0), 0);
    const deliveryFee = cartItems.length > 0 ? 45 : 0;
    const total = subtotal + deliveryFee;

    return (
        <div className="cart-page-shell">
            <div className="cart-hero-card">
                <div>
                    <p className="cart-eyebrow">Your delicious orders</p>
                    <h2>Your Cart</h2>
                    <p className="cart-subtitle">
                        {cartItems.length > 0
                            ? `${cartItems.length} item${cartItems.length > 1 ? "s" : ""} ready for checkout`
                            : "Your basket is empty. Add your favorite meals to get started."}
                    </p>
                </div>
                <button className="clear-cart-btn" onClick={handleClearCart} disabled={cartItems.length === 0}>
                    Clear Cart
                </button>
            </div>

            {cartItems.length === 0 ? (
                <div className="empty-cart-card">
                    <div className="empty-cart-icon">🛒</div>
                    <h3>Your cart feels lonely</h3>
                    <p>Browse the menu and add a few mouthwatering dishes to fill it up.</p>
                </div>
            ) : (
                <div className="cart-content-grid">
                    <div className="cart-items-panel">
                        <RestaurantMenu menuItems={cartItems} />
                    </div>

                    <aside className="cart-summary-card">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <strong>₹{subtotal}</strong>
                        </div>
                        <div className="summary-row">
                            <span>Delivery Fee</span>
                            <strong>₹{deliveryFee}</strong>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <strong>₹{total}</strong>
                        </div>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </aside>
                </div>
            )}
        </div>
    );
};

export default Cart;