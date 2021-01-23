import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const TableHeading = (props) => {
  const useStyles = makeStyles((theme) => ({
    tableRowRoot: {
      color: grey[500],
    },
    tableCellRoot: {
      borderBottom: "0 none",
      fontSize: 13,
      padding: 8,
      // fontWeight: Fonts.BOLD,
      "&:first-child": {
        paddingLeft: 20,
      },
      "&:last-child": {
        paddingRight: 20,
      },
    },
  }));

  const classes = useStyles(props);
  return (
    <TableRow className={classes.tableRowRoot}>
      <TableCell className={classes.tableCellRoot}>Name</TableCell>
      <TableCell align="left" className={classes.tableCellRoot}>
        Position Applied
      </TableCell>
      <TableCell align="left" className={classes.tableCellRoot}>
        Date Applied
      </TableCell>
      <TableCell align="left" className={classes.tableCellRoot}>
        Assessment Score
      </TableCell>
      <TableCell align="left" className={classes.tableCellRoot}>
        Application Status
      </TableCell>
      <TableCell align="right" className={classes.tableCellRoot}>
        {" "}
      </TableCell>
    </TableRow>
  );
};

export default TableHeading;
