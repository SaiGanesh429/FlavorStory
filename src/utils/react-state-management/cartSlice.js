import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            state.items.push(newItem);
            state.totalQuantity += 1;
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            state.totalQuantity--;
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
        }
    }
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
