import React from "react";

import styled from "styled-components";

import { CardContainer } from "../../../../../components/layout";

import IconCheckboxOff from "../../../../../assets/icons/checkbox-off";

const index = ({ title, value, img }) => {
  return (
    <CustomContainer>
      <SummaryContainer>
        <div>
          <h1>Assessment Chart Here</h1>
          <h4>{title}</h4>
          <h2>{value}</h2>
        </div>
        <IconCheckboxOff />
      </SummaryContainer>
    </CustomContainer>
  );
};

const CustomContainer = styled(CardContainer)`
  /* height: 9vh; */
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default index;
