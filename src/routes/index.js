import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import PrivateSection from "./PrivateSection";
import PublicRoutes from "./PublicRoutes";
import RecruitSection from "./RecruitSection";

// redux and axios
import setAuthToken from "../utils/setAuthToken";
import { useDispatch, useSelector } from "react-redux";
import { loadUserAction } from "../redux/actions/user";
import { loadCompanyAction } from "../redux/actions/company";

function Routes() {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [width, height] = useWindowSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useselector
  const authenticated = useSelector((state) => state.user.isAuthenticated);
  const companyAuth = useSelector((state) => state.company.isAuthenticated);

  const dispatch = useDispatch();

  // hook changes based off user.isAuthenicated
  // todo: Need to separate employer login and user login
  const [isAuthenticated, setIsAuthenticated] = useState("");

  // loads the user data on page refresh
  // todo: We want to show a loading icon while this is happening
  useEffect(() => {
    //  todo: include logic for different outcomes
    const loadUserData = async () => {
      if (localStorage.token) {
        try {
          dispatch(loadUserAction());
        } catch (err) {
          console.log("error");
        }
      } else if (localStorage.company_token) {
        try {
          // While thie company actions is happening, we want to be loading our so it won't just appear
          dispatch(loadCompanyAction());
        } catch (err) {
          console.log("error");
        }
      }
    };
    loadUserData();
    // eslint-disable-next-line
  }, []);

  // force rerender whe authenticated changes
  useEffect(() => {
    if (localStorage.token) {
      setIsAuthenticated("user");
      setAuthToken(localStorage.token);
    } else if (localStorage.company_token) {
      setIsAuthenticated("company");
      setAuthToken(localStorage.company_token);
    } else {
      setIsAuthenticated(false);
    }
  }, [authenticated, companyAuth]);

  // todo: we have 3 different outcomes. if localstorage.token, go to user dash. if localstorage.companytoken, got to company dash. else public route
  if (isAuthenticated === "user") {
    return <PrivateSection />;
  } else if (isAuthenticated === "company") {
    return <RecruitSection />;
  } else {
    return <PublicRoutes />;
  }
  // return isAuthenticated ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
