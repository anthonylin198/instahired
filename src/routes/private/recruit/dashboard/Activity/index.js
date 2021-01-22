import React from "react";
import StatGraphs from "./StatGraphs";
import { CardContainer } from "../../../../../components/layout";
import styled from "styled-components";
// import AppCard from "../../../../@crema/core/AppCard";
// import AppSelect from "../../../../@crema/core/AppSelect";
// import { useIntl } from "react-intl";

const data = [
  { name: "Jan", Consultations: 250, Patients: 200 },
  { name: "Feb", Consultations: 250, Patients: 200 },
  { name: "Mar", Consultations: 250, Patients: 200 },
  { name: "Apr", Consultations: 300, Patients: 200 },
  { name: "May", Consultations: 300, Patients: 200 },
  { name: "Jun", Consultations: 300, Patients: 200 },
  { name: "July", Consultations: 300, Patients: 200 },
  { name: "Aug", Consultations: 300, Patients: 200 },
  { name: "Sep", Consultations: 300, Patients: 200 },
];

const HospitalActivity = () => {
  return (
    <CustomContainer>
      <h3>Week Snapshot</h3>
      <StatGraphs data={data} />
    </CustomContainer>
  );
};
export default HospitalActivity;

const CustomContainer = styled(CardContainer)`
  background: #172b4d;
  color: white;
  height: 39vh;
`;
