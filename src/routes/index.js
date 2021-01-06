import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import PrivateSection from "./PrivateSection";
import PublicRoutes from "./PublicRoutes";

// redux and axios
import setAuthToken from "../utils/setAuthToken";
import { useDispatch, useSelector } from "react-redux";
import { loadUserAction } from "../redux/actions/user";

function Routes() {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [width, height] = useWindowSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useselector
  const authenticated = useSelector((state) => state.user.isAuthenticated);

  const dispatch = useDispatch();

  // hook changes based off user.isAuthenicated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // loads the user data on page refresh
  useEffect(() => {
    const loadUserData = async () => {
      try {
        dispatch(loadUserAction());
      } catch (err) {
        console.log("error");
      }
    };
    loadUserData();
    // eslint-disable-next-line
  }, []);

  // force rerender whe authenticated changes
  useEffect(() => {
    if (localStorage.token) {
      setIsAuthenticated(true);
      setAuthToken(localStorage.token);
    } else {
      setIsAuthenticated(false);
    }
  }, [authenticated]);

  return isAuthenticated ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
