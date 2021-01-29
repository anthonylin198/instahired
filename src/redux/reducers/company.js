import { createSlice } from "@reduxjs/toolkit";
import { loadCompanyAction } from "../actions/company";

export const companySlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    bio: "",
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("company_token");
      state.name = "";
      state.email = "";
      state.isAuthenticated = false;
    },
  },
  // must put asyncstuff here
  extraReducers: {
    [loadCompanyAction.fulfilled]: (state, action) => {
      if (action.payload) {
        const { name, email, description, jobs, assessments } = action.payload;
        state.name = name;
        state.email = email;
        state.description = description;
        state.jobs = jobs;
        state.assessments = assessments;
        state.isAuthenticated = true;
      } else {
        state.name = "";
        state.email = "";
        state.isAuthenticated = false;
      }
    },
  },
});

const { actions } = companySlice;
export const { logout } = actions;
