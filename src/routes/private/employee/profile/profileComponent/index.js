import React from "react";
import { CardContainerFlex } from "../../../../../components/layout";

// redux
import { useSelector } from "react-redux";

const ProfileComponent = () => {
  // uses
  const user = useSelector((state) => state.user);

  return (
    <CardContainerFlex>
      <div>Name: {user.name}</div>
      <div>Bio: {user.bio}</div>
      <div>Professional Summary:</div>
      <div>Open Applications: {user.open_applications}</div>
      <div>Closed Applications: {user.closed_applicatoins}</div>
      <div>Information Container</div>
      <div>Information Container</div>
      <div>Information Container</div>
      <div>Information Container</div>
      <div>Information Container</div>
      <div>Information Container</div>
      <div>Information Container</div>
      <div>Information Container</div>
      <div>Information Container</div>
      <div>Information Container</div>
      <div>Information Container</div>
    </CardContainerFlex>
  );
};

export default ProfileComponent;
