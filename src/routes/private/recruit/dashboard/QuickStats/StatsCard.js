import React from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
// import { Fonts } from "../../../../shared/constants/AppEnums";
import AppCard from "../../../../../components/crema/AppCard";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  statsCard: {
    borderRadius: 10,
  },
  root: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: (props) => props.bgColor,
  },
}));

const StatsCard = (props) => {
  const { icon, bgColor, data, heading } = props;

  const classes = useStyles({ bgColor });

  return (
    <AppCard className={clsx(classes.statsCard, "card-hover")}>
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
    </AppCard>
  );
};

export default StatsCard;

StatsCard.defaultProps = {
  bgColor: "",
  data: {
    count: "",
  },
};

StatsCard.propTypes = {
  bgColor: PropTypes.string,
  data: PropTypes.object,
  heading: PropTypes.any.isRequired,
};
