import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <ContentContainer>
        <h1>Why InstaHired?</h1>
        <p>
          Skip the phone screening, learn more, get hired faster. Mission driven
          startups need to hire top talent today. Prove your skills through
          customized technical assessments created by the company, and skip to
          the final round.
        </p>
        <ButtonLink to="/">Learn More</ButtonLink>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;
    padding-bottom: 50px;
    @media (max-width: 900px) {
      display: none;
    }
  }
  p {
    padding-bottom: 75px;
  }
`;

const ButtonLink = styled(Link)`
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3179ff;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: white;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 70%;
`;
export default Main;
