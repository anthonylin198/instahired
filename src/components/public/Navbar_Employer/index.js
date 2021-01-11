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
              <NavLinks to="quiz">Find a Job</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/recruit">Recruit</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/recruit/signin">Login</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/recruit/signup">Create an Account</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
