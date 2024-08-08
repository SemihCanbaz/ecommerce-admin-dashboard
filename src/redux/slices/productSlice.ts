import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store"; // Import RootState from store
import "../../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import "../../styles/App.css";

export interface Product {
  id: number;
  name: string;
  price: number;
}

const initialState: Product[] = [];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get<Product[]>("/api/products");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addProduct } = productSlice.actions;

export const selectAllProducts = (state: RootState) => state.products;

export default productSlice.reducer;
