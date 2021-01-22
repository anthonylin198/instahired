import React from "react";

import { CardContainer } from "../../../../../components/layout";

import styled from "styled-components";

const index = () => {
  return (
    <CustomContainer>
      <h2>Recent Applicants</h2>
      <TitlesContainer>
        <h3>Name</h3>
        <h3>Position</h3>
        <h3>Score</h3>
        <h3>Self-Eval</h3>
      </TitlesContainer>
      {/* This will be filled with components with map for each role */}
      <RoleContainer>
        <p>Anthony Lin</p>
        <p>anthony.lin.198@gmail.com</p>
        <p>5</p>
        <p>83%</p>
      </RoleContainer>
    </CustomContainer>
  );
};

const CustomContainer = styled(CardContainer)`
  background: #172b4d;
  color: white;
  height: 39vh;
`;

const TitlesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default index;
