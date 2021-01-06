import { createSlice } from "@reduxjs/toolkit";
import { loadUserAction } from "../actions/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    completion: {},
    bio: "",
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.name = "";
      state.email = "";
      state.isAuthenticated = false;
    },
  },
  // must put asyncstuff here
  extraReducers: {
    [loadUserAction.fulfilled]: (state, action) => {
      if (action.payload) {
        const { name, email } = action.payload;
        state.name = name;
        state.email = email;
        state.isAuthenticated = true;
      } else {
        state.name = "";
        state.email = "";
        state.isAuthenticated = false;
      }
    },
  },
});

const { actions } = userSlice;
export const { logout } = actions;
