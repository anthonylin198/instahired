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
        const {
          name,
          email,
          applications,
          open_applications,
          closed_applications,
          bio,
        } = action.payload;
        state.name = name;
        state.email = email;
        state.applications = applications;
        state.open_applications = open_applications;
        state.closed_applications = closed_applications;
        state.bio = bio;
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
