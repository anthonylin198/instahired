import React from "react";

import { CardContainer } from "../../../../../components/layout";

import styled from "styled-components";

const CustomContainer = styled(CardContainer)`
  height: 50vh;
`;

const index = () => {
  return (
    <CustomContainer>
      <h1>Snapshot Card</h1>
    </CustomContainer>
  );
};

export default index;
