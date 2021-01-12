import React from "react";
import { useHistory } from "react-router-dom";
import SLUGS from "../../../../resources/slugs";
import {
  IconLogout,
  IconAgents,
  IconOverview,
  IconContacts,
  IconTickets,
} from "../../../../assets/icons";
import { convertSlugToUrl } from "../../../../resources/utilities";
import LogoComponent from "./LogoComponent";
import Menu from "./MenuComponent";
import MenuItem from "./MenuItemComponent";

// redux
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/reducers/user";

// styled components
import styled from "styled-components";

const Seperator = styled.div`
  border-top: 2px solid #f7f8fc;
  margin-top: 16px;
  margin-bottom: 16px;
  opacity: 0.06;
`;

function SidebarComponent() {
  const { push } = useHistory();
  const isMobile = window.innerWidth <= 1080;

  const dispatch = useDispatch();

  async function logoutUser() {
    // destroy the auth token
    dispatch(logout());
    push(SLUGS.recruit);
  }

  function onClick(slug, parameters = {}) {
    push(convertSlugToUrl(slug, parameters));
  }

  return (
    <Menu isMobile={isMobile}>
      <div style={{ paddingTop: 30, paddingBottom: 30 }}>
        <LogoComponent />
      </div>
      <MenuItem
        id={SLUGS.companyProfile}
        title="Company Profile"
        icon={IconAgents}
        onClick={() => onClick(SLUGS.companyProfile)}
      />
      <MenuItem
        id={SLUGS.companyDashboard}
        title="Dashboard"
        icon={IconOverview}
        onClick={() => onClick(SLUGS.companyDashboard)}
      />

      <MenuItem
        id={SLUGS.openPositions}
        title="Open Positions"
        icon={IconContacts}
        onClick={() => onClick(SLUGS.openPositions)}
      />

      <MenuItem
        id={SLUGS.assessments}
        title="Assessments"
        icon={IconTickets}
        onClick={() => onClick(SLUGS.assessments)}
      />

      <Seperator></Seperator>

      <MenuItem
        id="logout"
        title="Logout"
        icon={IconLogout}
        onClick={logoutUser}
      />
    </Menu>
  );
}

export default SidebarComponent;
