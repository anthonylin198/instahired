import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../components/loading";

const Signup = lazy(() => import("./auth/signup"));
const Signin = lazy(() => import("./auth/login"));
const Landing = lazy(() => import("./landing/employee"));
const EmployerLanding = lazy(() => import("./landing/recruit"));
const EmployerSignup = lazy(() => import("./auth/employer/EmployerSignup"));
const EmployerLogin = lazy(() => import("./auth/employer/EmployerLogin"));
// const DashboardComponent = lazy(() => import("./dashboard"));
function PublicRoutes() {
  return (
    <Suspense fallback={<LoadingComponent loading />}>
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
