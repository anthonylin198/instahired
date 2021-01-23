import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

import SummaryCard from "./SummaryCard.js";
// import SnapshotCard from "./SnapshotCard.js";
import RecentCard from "./RecentCard/index.js";
import ApplicantsCard from "./ApplicantsCard";
// import ProfileCard from "./ProfileCard";
import QuickStats from "./QuickStats";
import AddCard from "./AddCard";

import RecentApplicantsCard from "./RecentApplicantsCard";

import phone from "../../../../assets/img/icon_phone.png";
import Activity from "./Activity";
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
        <Grid item xs={12} md={7}>
          <RecentApplicantsCard />
        </Grid>
        <Grid item xs={12} md={5}>
          <ApplicantsCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
