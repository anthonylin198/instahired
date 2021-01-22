import React from "react";

import { CardContainer } from "../../../../../components/layout";

import styled from "styled-components";

const index = () => {
  return (
    <CustomContainer>
      <h2>Current Hiring Pipeline</h2>
      <TitlesContainer>
        <h3>Role</h3>
        <h3>Open applications</h3>
        <h3>Closed Applications</h3>
        <h3>Total Applications</h3>
      </TitlesContainer>
      {/* This will be filled with components with map for each role */}
      <RoleContainer>
        <p>Software eng</p>
        <p>10</p>
        <p>5</p>
        <p>15</p>
      </RoleContainer>
      <RoleContainer>
        <p>Frontent eng</p>
        <p>10</p>
        <p>5</p>
        <p>15</p>
      </RoleContainer>
      <RoleContainer>
        <p>Business Intern</p>
        <p>10</p>
        <p>5</p>
        <p>15</p>
      </RoleContainer>
    </CustomContainer>
  );
};

const CustomContainer = styled(CardContainer)`
  background: #172b4d;
  color: white;
  height: 79vh;
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
