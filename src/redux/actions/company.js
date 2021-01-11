// dispatch to the reducer here
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

import { createAsyncThunk } from "@reduxjs/toolkit";

// ! example of async thunk
export const loadCompanyAction = createAsyncThunk(
  "company/loadCompanyData",
  async () => {
    if (localStorage.company_token) {
      setAuthToken(localStorage.company_token); // sets the x-auth headers
    }
    try {
      const userData = await axios.get("/api/company_auth");
      return userData.data;
    } catch (err) {
      console.err(err);
    }
  }
);
