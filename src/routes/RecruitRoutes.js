import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../components/loading";

const DashboardComponent = lazy(() => import("./private/recruit/dashboard"));
const ProfileComponent = lazy(() => import("./private/recruit/profile"));
const CurriculumComponent = lazy(() => import("./private/employee/curriculum"));
const ExploreComponent = lazy(() => import("./private/employee/explore"));
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
          component={CurriculumComponent}
        />
        <Route exact path={SLUGS.assessments} component={ExploreComponent} />

        <Redirect to={SLUGS.dashboard} />
      </Switch>
    </Suspense>
  );
}

export default RecruitRoutes;
