import React from "react";
import { Column, Row } from "simple-flexbox";
import {
  SidebarComponent,
  SidebarContext,
} from "../components/private/employee/sidebar";
// import HeaderComponent from "../components/private/employee/header/HeaderComponent";
import HeaderComponent2 from "../components/private/employee/header2";
import PrivateRoutes from "./PrivateRoutes";

import styled from "styled-components";

import { useLocation } from "react-router-dom";

// components
const StyledRow = styled(Row)`
  height: 100%;
  min-height: 850px;
`;

const StyledColumn = styled(Column)`
  /* height: 100%; */
  margin-left: 255px;
  padding: 30px;
  @media (max-width: 1080px) {
    margin-left: 0;
  }
`;

const StyledBlock = styled.div`
  margin-top: 0px;
`;

const StyledSidebarBlock = styled.div`
  margin-top: 10px;
`;

const Spacer = styled.div`
  margin-top: 85px;
  /* width: 100vw; */
`;

function PrivateSection() {
  // conditional rendering based on react router
  let location = useLocation();
  // todo: check state of login, if the slug has /emplyer, then takes to the employer dashboard
  if (location.pathname.includes("/curriculum/")) {
    return (
      <div>
        <h1>Startup Course Layout</h1>
      </div>
    );
  }
  return (
    <SidebarContext>
      <HeaderComponent2 />
      <Spacer />
      <StyledRow>
        {/* Sidebar */}
        <StyledSidebarBlock>
          <SidebarComponent />
        </StyledSidebarBlock>
        <StyledColumn flexGrow={1}>
          <StyledBlock>
            <PrivateRoutes />
          </StyledBlock>
        </StyledColumn>
      </StyledRow>
    </SidebarContext>
  );
}

export default PrivateSection;
