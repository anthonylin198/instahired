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
    id: "#SK232",
    customer: "Myrtie",
    date: "08-21-2020",
    paymentType: "COD",
    status: "In Transit",
  },
  {
    id: "#SK232",
    customer: "John",
    date: "08-21-2020",
    paymentType: "COD",
    status: "Delivered",
  },
  {
    id: "#SK232",
    customer: "Jill",
    date: "08-21-2020",
    paymentType: "COD",
    status: "In Transit",
  },
  {
    id: "#SK232",
    customer: "Jill",
    date: "08-21-2020",
    paymentType: "COD",
    status: "In Transit",
  },
  {
    id: "#SK232",
    customer: "Jill",
    date: "08-21-2020",
    paymentType: "COD",
    status: "In Transit",
  },
  {
    id: "#SK232",
    customer: "Jill",
    date: "08-21-2020",
    paymentType: "COD",
    status: "In Transit",
  },
  {
    id: "#SK232",
    customer: "Jill",
    date: "08-21-2020",
    paymentType: "COD",
    status: "In Transit",
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
          {transactionData.map((data) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </CustomTable>
    </AppTableContainer>
  );
};

export default TransactionTable;
