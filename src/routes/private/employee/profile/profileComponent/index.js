import React from "react";
import { CardContainerFlex } from "../../../../../components/layout";

// redux
import { useSelector } from "react-redux";

const ProfileComponent = () => {
  // uses
  const user = useSelector((state) => state.user);

  // console.log(user);

  return (
    <CardContainerFlex>
      <div>Name: {user.name}</div>
      <div>Contact Information:</div>
      <div>Professional Summary:</div>
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
      <div>Information Container</div>
      <div>Information Container</div>
    </CardContainerFlex>
  );
};

export default ProfileComponent;
