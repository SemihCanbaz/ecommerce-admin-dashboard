import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store"; // Import RootState from store
import "../../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import "../../styles/App.css";

export interface User {
  id: number;
  name: string;
  role: string;
}

const initialState: User[] = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get<User[]>("/api/users");
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUserRole: (state, action) => {
      const { id, role } = action.payload as { id: number; role: string };
      const user = state.find((user) => user.id === id);
      if (user) {
        user.role = role;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { updateUserRole } = userSlice.actions;

export const selectAllUsers = (state: RootState) => state.users;

export default userSlice.reducer;
