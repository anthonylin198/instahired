import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../components/loading";
import slugs from "../resources/slugs";

const DashboardComponent = lazy(() => import("./private/employee/dashboard"));
const ProfileComponent = lazy(() => import("./private/employee/profile"));
const CurriculumComponent = lazy(() => import("./private/employee/curriculum"));
const ExploreComponent = lazy(() => import("./private/employee/explore"));
const MessagesComponent = lazy(() => import("./private/employee/messages"));
const JobsComponent = lazy(() => import("./private/employee/jobs"));
const ApplicationsComponent = lazy(() =>
  import("./private/employee/applications")
);

function PrivateRoutes() {
  return (
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route exact path={SLUGS.jobs} component={JobsComponent} />
        <Route
          exact
          path={slugs.applications}
          component={ApplicationsComponent}
        />
        <Route exact path={SLUGS.profile} component={ProfileComponent} />
        <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
        <Route exact path={SLUGS.curriculum} component={CurriculumComponent} />
        <Route exact path={SLUGS.explore} component={ExploreComponent} />
        <Route exact path={SLUGS.messages} component={MessagesComponent} />
        <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
        {/* startup school, this needs to be a different section */}
        <Route exact path={SLUGS.startupschool} component={MessagesComponent} />

        <Redirect to={SLUGS.jobs} />
      </Switch>
    </Suspense>
  );
}

export default PrivateRoutes;
