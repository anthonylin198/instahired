import React from "react";
import { Column, Row } from "simple-flexbox";
// todo: Have new sidebar component
import {
  SidebarComponent,
  SidebarContext,
} from "../components/private/recruit/sidebar";
import HeaderComponent from "../components/private/recruit/header/HeaderComponent";
import RecruitRoutes from "./RecruitRoutes";

import styled from "styled-components";

import { useLocation } from "react-router-dom";

// components
const StyledRow = styled(Row)`
  height: 100%;
  min-height: 100vh;
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
  margin-top: 34px;
`;

const Background = styled.div`
  height: 40vh;
  /* height: 100%; */
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #6dd5fa,
    #2980b9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #6dd5fa,
    #2980b9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

// check the route and have conditional rendering

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
      <Background>
        <StyledRow>
          {/* Sidebar */}
          <SidebarComponent />
          <StyledColumn flexGrow={1}>
            <HeaderComponent />
            <StyledBlock>
              <RecruitRoutes />
            </StyledBlock>
          </StyledColumn>
        </StyledRow>
      </Background>
    </SidebarContext>
  );
}

export default PrivateSection;
