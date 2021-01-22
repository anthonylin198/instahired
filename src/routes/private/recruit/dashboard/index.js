import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SummaryCard from "./SummaryCard.js";
import SnapshotCard from "./SnapshotCard.js";

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
          <SnapshotCard />
        </Grid>
        <Grid item md={4}>
          <SnapshotCard />
        </Grid>
      </Grid>
      {/* last row */}
      <Grid container spacing={3}>
        <Grid item md={4}>
          <SnapshotCard />
        </Grid>
        <Grid item md={4}>
          <SnapshotCard />
        </Grid>
        <Grid item md={4}>
          <SnapshotCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
