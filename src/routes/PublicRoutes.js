import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../components/loading";

const Signup = lazy(() => import("./auth/signup"));
const Signin = lazy(() => import("./auth/login"));
const Landing = lazy(() => import("./landing/employee"));
const EmployerLanding = lazy(() => import("./landing/recruit"));
// const DashboardComponent = lazy(() => import("./dashboard"));
function PublicRoutes() {
  return (
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route exact path={SLUGS.landing} component={Landing} />
        {/* employee signup */}
        {/* employee signin */}
        <Route exact path={SLUGS.recruit} component={EmployerLanding} />
        {/* employer signup */}
        {/* employer signin */}
        <Route exact path={SLUGS.signup} component={Signup} />
        <Route exact path={SLUGS.signin} component={Signin} />
        <Redirect to={SLUGS.landing} />
      </Switch>
    </Suspense>
  );
}

export default PublicRoutes;
