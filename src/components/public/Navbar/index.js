import React from "react";

import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Instahired</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Find Candidates</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="quiz">Find a Job</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/signin">Login</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="components">Create an Account</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
