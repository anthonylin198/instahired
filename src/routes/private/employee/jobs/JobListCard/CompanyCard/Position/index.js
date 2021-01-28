import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 2,
  },
  container: {
    display: "flex",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  button: {
    display: "flex",
    alignItems: "center",
    height: "90%",
    fontSize: 12,
  },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.container}>
        <p>Frontend Engineer</p>
        <p>location</p>
        <p>Date</p>
        <p>Salary</p>
        <button className={classes.button}>Apply</button>
      </Paper>
    </div>
  );
}
