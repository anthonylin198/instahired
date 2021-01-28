import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import FilterCard from "./FilterCard";
import ProfileCard from "./ProfileCard";
import JobListCard from "./JobListCard";

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
        <Grid item xs={12} md={2}>
          <FilterCard />
        </Grid>
        <Grid item xs={12} md={7}>
          {/* make the get request here */}
          <JobListCard />
        </Grid>
        {/* Need to make this more responsive, right now just no show on mobile */}
        <Grid item xs={12} md={3}>
          <ProfileCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
