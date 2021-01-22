import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "job", label: "Job Applied", minWidth: 100 },
  {
    id: "culture",
    label: "Culture Fit Score",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "technical",
    label: "Technical Assessment",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  // {
  //   id: "density",
  //   label: "Density",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toFixed(2),
  // },
];

const Title = styled.h3`
  padding: 1rem;
  font-weight: bold;
`;

function createData(name, job, culture, technical) {
  // const density = population / size;
  return { name, job, culture, technical };
}

const rows = [
  createData("Anthony", "Frontend Engineer", "95%", 10),
  createData("John", "Frontend Engineer", "70%", 9),
  createData("Spenser", "Frontend Engineer", "88%", 10),
  createData("Steven", "Business Intern", "92%", 7),
  createData("Henry", "Business Intern", "45%", 8),
  createData("Jill", "Backend Engineer", "93%", 5),
  createData("Jane", "Business Intern", "77%", 9),
  createData("Johnny", "Frontend Engineer", "85%", 8),
  createData("Jason", "Backend Engineer", "88%", 6),
  createData("Kevin", "Business Intern", "65%", 10),
  createData("Trisha", "Frontend Engineer", "88%", 8),
  createData("Tony", "Backend Engineer", "95%", 9),
  createData("Johnny", "Business Intern", "45%", 7),
  createData("Jake", "Frontend Engineer", "73%", 3),
  createData("Jillian", "Backend Engineer", "90%", 8),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    minHeight: "33vh",
    maxHeight: "33vh",
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <Title>Recent Applicants</Title>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
