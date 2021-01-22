import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SummaryCard from "./SummaryCard.js";
// import SnapshotCard from "./SnapshotCard.js";
import RecentCard from "./RecentCard/index.js";
import ApplicantsCard from "./ApplicantsCard";

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
        <Grid item md={3}>
          <SummaryCard title="Job Postings" value={3} />
        </Grid>
        <Grid item md={3}>
          <SummaryCard title="Open Applications" value={10} />
          {/* <PhaseComponent title={"Technical Track"} /> */}
        </Grid>
        <Grid item md={3}>
          <SummaryCard title="Total Applications" value={60} />
          {/* <PhaseComponent title={"Production"} /> */}
        </Grid>
        <Grid item md={3}>
          <SummaryCard title="Total Hires" value={6} />
          {/* <PhaseComponent title={"Production"} /> */}
        </Grid>
      </Grid>
      {/* Other Progress */}
      <Grid container spacing={3}>
        <Grid item md={8}>
          {/* <SnapshotCard /> */}

          <Activity />
        </Grid>
        <Grid item md={4}>
          <ApplicantsCard title="Assessment Pass Rate Pie Chart" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <RecentCard />
        </Grid>
        <Grid item md={4}>
          <ApplicantsCard title="Applicant Breakdown Bar Graph" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
