import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalAmount += item.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const itemIndex = state.items.findIndex((i) => i.id === id);
      if (itemIndex >= 0) {
        state.totalAmount -=
          state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    }
  }
});

export const { addToCart, removeFromCart, item } = cartSlice.actions;
export default cartSlice.reducer;
