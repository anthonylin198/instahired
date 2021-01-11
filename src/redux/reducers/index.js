import { userSlice } from "./user";
import { companySlice } from "./company";

const reducers = {
  user: userSlice.reducer,
  company: companySlice.reducer,
};

export default reducers;
