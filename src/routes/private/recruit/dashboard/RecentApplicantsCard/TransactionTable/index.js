import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "../../../../../../components/crema/AppTableContainer";

import styled from "styled-components";

const CustomTable = styled(Table)`
  && {
    min-height: 50vh;
    max-height: 50vh;
  }
`;

const transactionData = [
  {
    name: "Anthony Lin",
    position: "Frontend Engineer",
    date: "08-21-2020",
    score: 100,
    status: "Open",
  },
  {
    name: "John Jones",
    position: "Business Analyst",
    date: "08-21-2020",
    score: 90,
    status: "Open",
  },
  {
    name: "Jill JIll",
    position: "Backend Engineer",
    date: "08-21-2020",
    score: 95,
    status: "Open",
  },
  {
    name: "Mary Mary",
    position: "Frontend Engineer",
    date: "08-21-2020",
    score: 85,
    status: "Open",
  },
  {
    name: "Jane Jane",
    position: "Frontend Engineer",
    date: "08-21-2020",
    score: 100,
    status: "Open",
  },
  {
    name: "Lit Bet",
    position: "Backend Engineer",
    date: "08-21-2020",
    score: 60,
    status: "Closed",
  },
  {
    name: "Bet Bet",
    position: "Backend Engineer",
    date: "08-21-2020",
    score: 45,
    status: "Closed",
  },
];

const TransactionTable = () => {
  return (
    <AppTableContainer>
      <CustomTable className="table">
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {transactionData.map((data, i) => (
            <TableItem data={data} key={i} />
          ))}
        </TableBody>
      </CustomTable>
    </AppTableContainer>
  );
};

export default TransactionTable;
