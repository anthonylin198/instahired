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
      {/* hero section */}
      <HeroContainer>
        <LeftGrid item xs={12} md={6}>
          {/* Content Container */}
          <LeftContentContainer>
            <Title>Instahired</Title>
            <SubTitle>Find your dream startup</SubTitle>
            <Description>
              Skip the phone screen and find your fit by demonstrating technical
              ability
            </Description>
            <ButtonLink to="signup">Join Now</ButtonLink>
          </LeftContentContainer>
        </LeftGrid>
        <RightGrid item md={6}>
          <RightContentContainer>
            <Typewriter>No Phone Screenings</Typewriter>
          </RightContentContainer>
        </RightGrid>
      </HeroContainer>
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

const HeroContainer = styled.div`
  display: flex;
  height: 94vh;
  background: #f9f9f9;
  @media screen and (max-width: 960px) {
    height: 90vh;
  }
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

  @media screen and (max-width: 960px) {
    justify-content: start;
  }
`;

const RightContentContainer = styled.div`
  color: white;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* flex-direction: column; */
  /* width: 600px; */
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
  align-items: center;
  text-align: left;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// https://www.youtube.com/watch?v=PuOGBacTYAY
const Typewriter = styled.h1`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  /* margin: 0 auto; Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 1.75s steps(40, end), blink-caret 0.75s step-end infinite;
  padding-left: 30px;
  font-size: 2rem;

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

export default Employee;
