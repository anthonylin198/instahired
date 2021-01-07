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
        <h1>Skip to the Final Round Interview At Your Dream Startup</h1>
        <h2>asdasdasdvfddsf</h2>
        <Link to="/recruit">Recruit</Link>

        <Link to="signup">Join Now</Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: 94vh;
  background: #f9f9f9;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export default Employee;
