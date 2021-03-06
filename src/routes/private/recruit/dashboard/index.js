import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import QuickStats from "./QuickStats";
import AddCard from "./AddCard";
import AssessmentsCard from "./AssessmentsCard";
import RecentApplicantsCard from "./RecentApplicantsCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Your Progress */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <QuickStats />
        </Grid>
        <Grid item xs={12} md={5}>
          <AddCard />
        </Grid>
        {/* Need to make this more responsive, right now just no show on mobile */}
        <Grid component={Box} item md={7} display={{ xs: "none", md: "block" }}>
          <RecentApplicantsCard />
        </Grid>
        <Grid component={Box} item md={5} display={{ xs: "none", md: "block" }}>
          <AssessmentsCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
