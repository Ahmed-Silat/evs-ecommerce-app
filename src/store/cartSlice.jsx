import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    openCart(state) {
      state.showCart = true;
    },
    closeCart(state) {
      state.showCart = false;
    },
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      state.showCart = true;
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity > 0 ? quantity : 1;
      }
    },
  },
});

export const {
  toggleCart,
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
