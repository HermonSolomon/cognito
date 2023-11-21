import { GroceryItem } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: GroceryItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<GroceryItem>) {
      return [...state, { ...action.payload }];
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
