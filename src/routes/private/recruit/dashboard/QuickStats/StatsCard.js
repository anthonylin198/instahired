import React from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import AppCard from "../../../../../components/crema/AppCard";
// import clsx from "clsx";

import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  statsCard: {
    borderRadius: 5,
  },
  root: {
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: (props) => props.bgColor,
  },
}));

const CustomAppCard = styled(AppCard)`
  && {
    border-radius: 5;
    transition: transform 0.2s ease-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const StatsCard = (props) => {
  const { icon, bgColor, data, heading } = props;

  const classes = useStyles({ bgColor });

  return (
    <CustomAppCard>
      <Box display="flex" alignItems="center">
        <Box fontSize={{ xs: 36, md: 48 }} clone>
          <Avatar className={classes.root}>{icon}</Avatar>
        </Box>
        <Box ml={{ xs: 3, xl: 4 }}>
          <Box component="p" color="text.secondary" mb={2} fontSize={14}>
            {heading}
          </Box>
          <Box component="h3" fontSize={20}>
            {data.count}
          </Box>
        </Box>
      </Box>
    </CustomAppCard>
  );
};

export default StatsCard;
