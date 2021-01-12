import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../components/loading";

const DashboardComponent = lazy(() => import("./private/recruit/dashboard"));
const ProfileComponent = lazy(() => import("./private/recruit/profile"));
const PositionsComponent = lazy(() =>
  import("./private/recruit/openpositions")
);
const AssessmentsComponent = lazy(() =>
  import("./private/recruit/assessments")
);
// const MessagesComponent = lazy(() => import("./private/employee/messages"));

function RecruitRoutes() {
  return (
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route exact path={SLUGS.companyProfile} component={ProfileComponent} />
        <Route
          exact
          path={SLUGS.companyDashboard}
          component={DashboardComponent}
        />
        <Route
          exact
          path={SLUGS.openPositions}
          component={PositionsComponent}
        />
        <Route
          exact
          path={SLUGS.assessments}
          component={AssessmentsComponent}
        />

        <Redirect to={SLUGS.companyDashboard} />
      </Switch>
    </Suspense>
  );
}

export default RecruitRoutes;
