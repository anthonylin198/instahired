import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const courses = [
  { courseTitle: "assessment1" },
  { courseTitle: "assessment2" },
  { courseTitle: "assessment3" },
  { courseTitle: "assessment4" },
  { courseTitle: "assessment5" },
  { courseTitle: "assessment6" },
  { courseTitle: "assessment7" },
];

const Assessments = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Your Progress */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          Create New Assessment
        </Grid>
        {/* map out the array with all the assessments company has */}
        {courses.map((item, index) => {
          return (
            <Grid item xs={12} md={3}>
              <div>{item.courseTitle}</div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Assessments;
