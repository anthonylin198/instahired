import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// redux connect
import { useSelector } from "react-redux";
import axios from "axios";

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
  const companyId = useSelector((state) => state.company.id);

  const onClick = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      name: "Frontend Engineer Assessmentsss",
      questions: [1, 2, 3, 4, 5],
      applications: [1, 2, 3, 4, 5],
      company_id: companyId,
    });
    // send the request
    try {
      await axios.post("/api/assessments", body, config);
    } catch (err) {
      console.log("this is an error", err);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Your Progress */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <button onClick={() => onClick()}>Create New Assessment</button>
        </Grid>
        {/* map out the array with all the assessments company has */}
        {courses.map((item, index) => {
          return (
            <Grid item xs={12} md={3} key={index}>
              <div>{item.courseTitle}</div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Assessments;
