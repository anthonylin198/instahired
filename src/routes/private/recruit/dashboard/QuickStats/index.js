import React from "react";
import Grid from "@material-ui/core/Grid/index";
import StatsCard from "./StatsCard";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ReceiptIcon from "@material-ui/icons/Receipt";
import Box from "@material-ui/core/Box";
import { blue, indigo, red, teal } from "@material-ui/core/colors";

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
        Overview Statistics
      </CustomBox>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <StatsCard
            icon={<PersonIcon style={{ fontSize: 30 }} />}
            bgColor={red[500]}
            data={quickStatsData.clientsData}
            heading="Open Applications"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <StatsCard
            icon={<ReceiptIcon style={{ fontSize: 30 }} />}
            bgColor={blue[500]}
            data={quickStatsData.invoiceData}
            heading="Closed Applications"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <StatsCard
            icon={<InsertDriveFileIcon style={{ fontSize: 30 }} />}
            bgColor={indigo[500]}
            data={quickStatsData.totalProjectsData}
            heading="Open Positions"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <StatsCard
            icon={<DescriptionIcon style={{ fontSize: 30 }} />}
            bgColor={teal[500]}
            data={quickStatsData.openProjectsData}
            heading="Total Hires"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default QuickStats;
