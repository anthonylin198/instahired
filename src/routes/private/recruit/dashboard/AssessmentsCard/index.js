import React from "react";
import EarningGraph from "./EarningGraph";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Categories from "./Categories";
import AppCard from "../../../../../components/crema/AppCard";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  earningGraphROot: {
    "& text": {
      fill: theme.palette.text.primary,
    },
  },
}));

const earningGraphData = [
  { color: "#E53E3E", colorName: "#e53935", name: "Fail", value: 35 },
  { color: "#38A169", colorName: "#43a047", name: "Excellent", value: 45 },
  { color: "#4299E1", colorName: "#2196f3", name: "Pass", value: 20 },
];

export const MonthlyEarning = () => {
  const classes = useStyles();
  return (
    <AppCard height="100%" title="Assessment Status">
      <Box className={classes.earningGraphROot}>
        <EarningGraph earningGraphData={earningGraphData} />
      </Box>
      <Divider />
      <Box pt={3}>
        <List>
          {earningGraphData.map((category) => {
            if (category.name !== "") {
              return <Categories category={category} key={category.name} />;
            }
            return null;
          })}
        </List>
      </Box>
    </AppCard>
  );
};

export default MonthlyEarning;
