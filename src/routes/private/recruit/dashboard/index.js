import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

import SummaryCard from "./SummaryCard.js";
// import SnapshotCard from "./SnapshotCard.js";
import RecentCard from "./RecentCard/index.js";
import ApplicantsCard from "./ApplicantsCard";
// import ProfileCard from "./ProfileCard";
import QuickStats from "./QuickStats";

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
      {/* <Box pt={{ xl: 4 }} md={7}> */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <QuickStats />
        </Grid>
        <Grid item xs={12} md={5}>
          {/* <Activity /> */}
        </Grid>
      </Grid>

      {/* </Box> */}
    </div>
  );
};

export default Dashboard;
