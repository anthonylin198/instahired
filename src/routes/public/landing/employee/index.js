import React, { useState } from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import Navbar from "../../../../components/public/Navbar";
import Sidebar from "../../../../components/public/Sidebar";

import student from "../../../../assets/img/student.jpg";
// Material UI
import Grid from "@material-ui/core/Grid";

const Employee = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar setIsOpen={setIsOpen} toggle={toggle} />
      <Container>
        <LeftGrid item xs={12} md={6}>
          {/* Content Container */}
          <ContentContainer>
            <h1>Instahired</h1>
            <h2>Find your dream startup</h2>
            <h2>
              Skip the phone screen and find your fit my demonstrating technical
              ability
            </h2>
            <Link to="/recruit">Recruit</Link>
            <Link to="signup">Find Your Job</Link>
          </ContentContainer>
        </LeftGrid>
        <RightGrid item md={6}>
          <ContentContainer>
            <h1>here</h1>
          </ContentContainer>
        </RightGrid>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: 94vh;
  background: #f9f9f9;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  width: 600px;
`;

const LeftGrid = styled(Grid)`
  background-color: #3179ff;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: left;
`;

const RightGrid = styled(Grid)`
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url(${student});
  /* background-image: url(${student}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  text-align: left;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default Employee;
