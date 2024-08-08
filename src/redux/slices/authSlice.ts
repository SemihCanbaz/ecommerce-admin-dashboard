import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store"; // Ensure RootState is imported from store
import "../../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import "../../styles/App.css";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

export const login = createAsyncThunk<
  string,
  { username: string; password: string }
>("auth/login", async (credentials) => {
  const response = await axios.post<{ token: string }>(
    "/api/login",
    credentials
  );
  return response.data.token;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export default authSlice.reducer;
