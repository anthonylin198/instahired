import React from "react";
import Grid from "@material-ui/core/Grid/index";
import AddCard from "./AddCard";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ReceiptIcon from "@material-ui/icons/Receipt";
import Box from "@material-ui/core/Box";
import { blue, indigo, red, teal } from "@material-ui/core/colors";
import phone from "../../../../../assets/img/icon_phone.png";

import styled from "styled-components";

// todo: This should be received through the Redux Store
const quickStatsData = {
  clientsData: { count: "15" },
  invoiceData: { count: "37" },
  openProjectsData: { count: "3" },
  totalProjectsData: { count: "8" },
};

// todo: Styled Components
const CustomBox = styled(Box)`
  && {
    text-transform: uppercase;
    margin-bottom: 20px;
    height: 5%;
  }
`;

const CustomGrid = styled(Grid)`
  && {
    height: 95%;
  }
`;

const QuickStats = () => {
  return (
    <>
      <CustomBox
        component="h2"
        color="text.primary"
        fontSize={16}
        mb={{ xs: 4, sm: 4, xl: 6 }}
        fontWeight={800}
      >
        Add New
      </CustomBox>
      <CustomGrid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <AddCard
            data={{
              id: 1,
              bgColor: "#0698ED",
              details: "Create New Job Posting",
              icon: phone,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AddCard
            data={{
              id: 1,
              bgColor: "#41C589",
              details: "Create New Assessment",
              icon: phone,
            }}
          />
        </Grid>
      </CustomGrid>
    </>
  );
};

export default QuickStats;
