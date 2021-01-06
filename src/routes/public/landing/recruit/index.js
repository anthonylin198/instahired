import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Recruit = () => {
  return (
    <Container>
      <h1>Hire quickly based off skills</h1>
      <Link to="/recruit/signup">signup</Link>
      <Link to="/recruit/signin">login</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Recruit;
