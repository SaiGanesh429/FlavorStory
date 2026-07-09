import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["pizza", "burger", "pasta"],
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
        }
    }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
