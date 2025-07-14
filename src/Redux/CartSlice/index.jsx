// step 1. import createSlice from react-redux toolkit.
import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    totalPrice:0,
  },

  reducers: {
    // make a function inside a reducers object
    // and inside a function set the logic

    // function 1
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.item.push(newItem);
      state.totalPrice+=newItem.price;
    },
    // function 2
    clearCart: (state) => {
      state.item = [] ;
      state.totalPrice =0;
    },
  },
});

// and export all function by using variables
export const selectCartItem = (state) => state.cart.item;
export const selectCartTotalPrice = (state) => state.cart.totalPrice;

// export functions using destructuring from cartSlice
export const {addToCart,clearCart}=CartSlice.actions
// export reducer from cartSlice
export default CartSlice.reducer