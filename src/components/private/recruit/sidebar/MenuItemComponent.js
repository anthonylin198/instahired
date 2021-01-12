import React from "react";
import { any, arrayOf, func, string } from "prop-types";
import { Column, Row } from "simple-flexbox";
// import { createUseStyles, useTheme } from "react-jss";
import CollapsibleContent from "../../../../components/collapsible/CollapsibleContent";
import { useSidebar } from "../../../../hooks/useSidebar";

import styled from "styled-components";

const Title = styled.span`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: ${({ isactive }) => (isactive === "true" ? "#DDE2FF" : "#A4A6B3")};
  margin-left: 24px;
`;

const ClassNameColumn = styled(Column)`
  /* check if isactive */
  border-left: ${({ isactive, level }) =>
    isactive === "true" ? (level > 1 ? "none" : "3px solid #00d4ff") : "none"};
  /* isactive === "true" ? (level > 1 ? "none" : "3px solid #8b8d94") : "none"}; */
`;

const ClassNameContainer = styled(Row)`
  display: flex;
  height: 56px;
  cursor: pointer;
  padding-left: ${({ level }) => 32 * level + "px"};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(221, 226, 255, 0.08);
  }

  background-color: ${({ isactive }) =>
    isactive === "true" ? "rgba(221, 226, 255, 0.08)" : "none"};
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
  // const theme = useTheme();
  const isCollapsible = children && children.length > 0;
  const { isExpanded, isActive, onItemClick } = useSidebar({
    isCollapsible,
    item: id,
    items,
  });
  // const classes = useStyles({ theme, level, isActive });
  // const classNameColumn = isActive ? classes.leftBar : "";
  // const classNameContainer = [
  //   classes.container,
  //   isActive && classes.activeContainer,
  // ].join(" ");
  const iconColor = isActive ? "#DDE2FF" : "#F7F8FC";

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
        <Title isactive={isActive.toString()}>{title}</Title>
      </ClassNameContainer>
      {isCollapsible && (
        <CollapsibleContent expanded={isExpanded}>
          {children.map((child) => child.type({ ...child.props }))}
        </CollapsibleContent>
      )}
    </ClassNameColumn>
  );
}

MenuItemComponent.defaultProps = {};

MenuItemComponent.propTypes = {
  children: any,
  icon: func,
  id: string,
  onClick: func,
  items: arrayOf(string),
  title: string,
};

export default MenuItemComponent;
