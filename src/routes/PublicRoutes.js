import React, { Suspense, lazy, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../components/loading";

import Navbar from "../components/public/Navbar";
import Sidebar from "../components/public/Sidebar";

const Signup = lazy(() => import("./public/auth/employee/signup"));
const Signin = lazy(() => import("./public/auth/employee/login"));
const Landing = lazy(() => import("./public/landing/employee"));
const EmployerLanding = lazy(() => import("./public/landing/recruit"));
const EmployerSignup = lazy(() =>
  import("./public/auth/employer/EmployerSignup")
);
const EmployerLogin = lazy(() =>
  import("./public/auth/employer/EmployerLogin")
);
// const DashboardComponent = lazy(() => import("./dashboard"));

function PublicRoutes() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Suspense fallback={<LoadingComponent loading />}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar setIsOpen={setIsOpen} toggle={toggle} />
      <Switch>
        {/* employee routes */}
        <Route exact path={SLUGS.landing} component={Landing} />
        <Route exact path={SLUGS.signup} component={Signup} />
        <Route exact path={SLUGS.signin} component={Signin} />

        {/* employer routes */}
        <Route exact path={SLUGS.recruit} component={EmployerLanding} />
        <Route exact path={SLUGS.recruitsignin} component={EmployerLogin} />
        <Route exact path={SLUGS.recruitsignup} component={EmployerSignup} />

        <Redirect to={SLUGS.landing} />
      </Switch>
    </Suspense>
  );
}

export default PublicRoutes;
