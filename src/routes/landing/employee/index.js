import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const Employee = () => {
  return (
    <Container>
      <h1>Employee landing</h1>
      <Link to="/recruit">Recruit</Link>
      <Link to="signup">Join Now</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Employee;
