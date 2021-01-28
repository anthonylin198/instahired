import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Position from "./Position";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 5,
  },
});

export default function OutlinedCard({ name, description, jobs, id }) {
  const classes = useStyles();

  const openJobs = jobs.map((job, i) => {
    return (
      <Position
        position={job.name}
        description={job.job_description}
        location={job.location}
        openApplications={job.open_applications}
        id={job._id}
        key={i}
      />
    );
  });

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          12-50 employees
        </Typography>
        {/* Add in cards with the Positions */}
        {openJobs}
      </CardContent>

      <CardActions>
        <Button size="small">Save</Button>
      </CardActions>
    </Card>
  );
}
