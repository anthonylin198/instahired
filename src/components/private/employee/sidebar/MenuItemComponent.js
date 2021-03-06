import React from "react";
// import { any, arrayOf, func, string } from "prop-types";
import { Column } from "simple-flexbox";
// import { createUseStyles, useTheme } from "react-jss";
import CollapsibleContent from "../../../../components/collapsible/CollapsibleContent";
import { useSidebar } from "../../../../hooks/useSidebar";

import styled from "styled-components";

const Title = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  /* color: ${(isActive) => (isActive ? "#DDE2FF" : "#A4A6B3")}; */
  color: black;
  /* margin-left: 24px; */
`;

const ClassNameColumn = styled(Column)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClassNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 70px;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  /* padding-left: ${({ level }) => 32 * level + "px"}; */
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #f2f8ff;
  }
  background-color: ${({ isactive }) =>
    isactive === "true" ? "#f2f8ff" : "none"};
`;

function MenuItemComponent({
  children,
  icon: Icon,
  id,
  items = [],
  level = 1,
  onClick,
  title,
}) {
  const isCollapsible = children && children.length > 0;
  const { isExpanded, isActive, onItemClick } = useSidebar({
    isCollapsible,
    item: id,
    items,
  });
  // const iconColor = isActive ? "#DDE2FF" : "#F7F8FC";

  const iconColor = "black";

  function onItemClicked(e) {
    if (onClick) {
      onClick(e);
    }
    onItemClick();
  }

  return (
    <ClassNameColumn key={id} isactive={isActive.toString()} level={level}>
      <ClassNameContainer
        vertical="center"
        onClick={onItemClicked}
        level={level}
        isactive={isActive.toString()}
        // className={classNameContainer}
      >
        <Icon fill={iconColor} opacity={!isActive && "0.4"} />
        <Title isActive={isActive}>{title}</Title>
      </ClassNameContainer>
      {isCollapsible && (
        <CollapsibleContent expanded={isExpanded}>
          {children.map((child) => child.type({ ...child.props }))}
        </CollapsibleContent>
      )}
    </ClassNameColumn>
  );
}

export default MenuItemComponent;
