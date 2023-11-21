import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Grocery } from "../../types";
import axios from "axios";

const API_URL =
  "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json";

const initialState: Grocery = {
  data: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "grocery",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const getProducts = createAsyncThunk("products/get", async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data as Grocery["data"];
    return data;
  } catch (error: any) {
    // Handle the error here
    console.log("Error fetching products:", error.message);
    throw error;
  }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
