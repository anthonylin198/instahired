import React from "react";
import AppCard from "../../../../../components/crema/AppCard";
import TransactionTable from "./TransactionTable";
import AppSelect from "../../../../../components/crema/AppSelect";
import { useIntl } from "react-intl";
import styled from "styled-components";

const OrderNTransaction = ({ transactionData }) => {
  const handleSelectionType = (data) => {
    console.log("data: ", data);
  };
  return (
    <AppCard
      height={1}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title="Recent Applicants"
      action={
        <AppSelect
          menus={["This Week", "This Month", "This Year"]}
          defaultValue={"This Week"}
          onChange={handleSelectionType}
        />
      }
    >
      <TransactionTable transactionData={transactionData} />
    </AppCard>
  );
};

export default OrderNTransaction;
