import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store"; // Import RootState from store
import "../../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import "../../styles/App.css";
export interface Order {
  id: number;
  total: number;
  status: string;
}

const initialState: Order[] = [];

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await axios.get<Order[]>("/api/orders");
  return response.data;
});

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload as { id: number; status: string }; // Explicitly define the payload type
      const order = state.find((order) => order.id === id);
      if (order) {
        order.status = status;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { updateOrderStatus } = orderSlice.actions;

export const selectAllOrders = (state: RootState) => state.orders;

export default orderSlice.reducer;
