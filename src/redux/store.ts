import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import ".././styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import ".././styles/App.css";

export const store = configureStore({
  reducer: {
    orders: orderReducer,
    products: productReducer,
    users: userReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
