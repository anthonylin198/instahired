import React from "react";

import styled from "styled-components";

import { CardContainer } from "../../../../../components/layout";

import IconCheckboxOff from "../../../../../assets/icons/checkbox-off";

const index = ({ title, value, img }) => {
  return (
    <CardContainer>
      <SummaryContainer>
        <div>
          <h4>{title}</h4>
          <h2>{value}</h2>
        </div>
        <IconCheckboxOff />
      </SummaryContainer>
    </CardContainer>
  );
};

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default index;
