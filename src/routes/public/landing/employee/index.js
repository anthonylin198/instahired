import React, { useState } from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import Navbar from "../../../../components/public/Navbar";
import Sidebar from "../../../../components/public/Sidebar";

// img
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
          <LeftContentContainer>
            <Title>Instahired</Title>
            <SubTitle>Find your dream startup</SubTitle>
            <Description>
              Skip the phone screen and find your fit my demonstrating technical
              ability
            </Description>
            <ButtonLink to="signup">Join Now</ButtonLink>
          </LeftContentContainer>
        </LeftGrid>
        <RightGrid item md={6}>
          <RightContentContainer>
            <h1>here</h1>
          </RightContentContainer>
        </RightGrid>
      </Container>
    </>
  );
};

const ButtonLink = styled(Link)`
  /* width: 100px; */
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: black;
  }
`;

const Container = styled.div`
  display: flex;
  height: 94vh;
  background: #f9f9f9;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  padding-bottom: 30px;
`;

const SubTitle = styled.h2`
  font-size: 2.5rem;
  padding-bottom: 30px;
`;

const Description = styled.p`
  padding-bottom: 50px;
  font-weight: 100;
`;

const LeftContentContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  width: 600px;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  padding: 1rem;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const RightContentContainer = styled.div`
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
