import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Container>
        <h1>Skip to the Final Round</h1>
        {/* <p>Anonymous Hiring: Showcase your skills</p>
        <p>
          Skip to the Final Round Interview: Companies create customized
          assessments to ensure culture fit and skills
        </p>
        <p>
          Valuable Time Spent: Companies are limited to have x number of open
          applications. No longer worry about 500 applications and automated
          rejections and
        </p> */}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Main;
