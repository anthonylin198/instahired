import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

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

const StyledP = styled.p`
  font-size: 0.5rem;
`;

export default function Variants({
  position,
  description,
  location,
  openApplications,
  id,
}) {
  const classes = useStyles();

  function logDetails() {
    console.log("posting id", id);
  }

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.container}>
        <StyledP>{position}</StyledP>
        <StyledP>{description}</StyledP>
        <StyledP>{location}</StyledP>
        <StyledP>{openApplications}</StyledP>
        <button className={classes.button} onClick={() => logDetails()}>
          Apply
        </button>
      </Paper>
    </div>
  );
}
