import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.totalQuantity -= state.items[index].quantity;
      state.items.splice(index, 1);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
