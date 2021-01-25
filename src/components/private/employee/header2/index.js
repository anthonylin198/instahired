import React, { useContext } from "react";
// import { string } from "prop-types";
import { useHistory } from "react-router-dom";
import { Row } from "simple-flexbox";
// import { createUseStyles, useTheme } from "react-jss";
import { SidebarContext } from "../../../../hooks/useSidebar";
import SLUGS from "../../../../resources/slugs";
import { IconBell, IconSearch } from "../../../../assets/icons";
import DropdownComponent from "../../../../components/dropdown";

import styled from "styled-components";

// redux
import { useSelector } from "react-redux";

const Container = styled(Row)`
  /* position: fixed; */
  /* width: 100%; */
  height: 80px;
  padding: 2rem;
  background-color: #f2f8ff;
`;

const IconStyles = styled.div`
  cursor: pointer;
  margin-left: 25px;
  @media (max-width: 768px) {
    margin-left: 12px;
  }
`;

const Separator = styled.div`
  border-left: 1px solid #dfe0eb;
  margin-left: 32px;
  margin-right: 32px;
  height: 32px;
  width: 2px;
  @media (max-width: 768px) {
    margin-left: 14px;
    margin-right: 0;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  margin-left: 3rem;

  @media (max-width: 1080px) {
    margin-left: 50px;
  }
  @media (max-width: 468px) {
    font-size: 20px;
  }
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-align: right;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Avatar2 = styled.div`
  height: 35px;
  width: 35px;
  background-color: #ff8c94;
  min-width: 35px;
  border-radius: 50px;
  margin-left: 14px;
  border: 1px solid #dfe0eb;
  @media (max-width: 768px) {
    margin-left: 14px;
  }
`;

function HeaderComponent2() {
  const { push } = useHistory();
  const { currentItem } = useContext(SidebarContext);

  let title = "InstaHired";

  const user = useSelector((state) => state.user);

  function onSettingsClick() {
    push(SLUGS.settings);
  }

  return (
    <Container vertical="center" horizontal="space-between">
      <Title>{title}</Title>
      <Row vertical="center">
        <IconStyles>
          <IconSearch />
        </IconStyles>
        <IconStyles>
          <DropdownComponent
            // Have a few different icon bells here
            label={<IconBell />}
            options={[
              {
                label: "Notification #1",
                onClick: () => console.log("Notification #1"),
              },
              {
                label: "Notification #2",
                onClick: () => console.log("Notification #2"),
              },
              {
                label: "Notification #3",
                onClick: () => console.log("Notification #3"),
              },
              {
                label: "Notification #4",
                onClick: () => console.log("Notification #4"),
              },
            ]}
            position={{
              top: 42,
              right: -14,
            }}
          />
        </IconStyles>
        <Separator></Separator>
        <DropdownComponent
          label={
            <>
              <Name>{user.name}</Name>
              {/* <Avatar
                // Insert link to the user image
                src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4"
                alt="avatar"
                // className={classes.avatar}
              /> */}
              <Avatar2>A</Avatar2>
            </>
          }
          options={[
            {
              label: "Settings",
              onClick: onSettingsClick,
            },
            {
              label: "Logout",
              onClick: () => console.log("logout"),
            },
          ]}
          position={{
            top: 52,
            right: -6,
          }}
        />
      </Row>
    </Container>
  );
}

export default HeaderComponent2;
