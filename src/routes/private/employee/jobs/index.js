import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import FilterCard from "./FilterCard";
import CompanyCard from "./CompanyCard";

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
        <Grid item xs={12} md={8}>
          <p>Top Startup Jobs</p>
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </Grid>
        {/* Need to make this more responsive, right now just no show on mobile */}
        <Grid item xs={12} md={2}>
          <p>Your Profile Status</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
