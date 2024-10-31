import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const itemInCart = state.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemInCart = state.find(item => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
      } else if (itemInCart) {
        return state.filter(item => item.id !== action.payload.id);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
