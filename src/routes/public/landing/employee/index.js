import React, { useState } from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import Navbar from "../../../../components/public/Navbar";
import Sidebar from "../../../../components/public/Sidebar";

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
        <h1>Employee landing</h1>
        <Link to="/recruit">Recruit</Link>
        <Link to="signup">Join Now</Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Employee;
