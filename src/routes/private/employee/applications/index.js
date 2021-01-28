import React from "react";

// redux
import { useSelector } from "react-redux";

const Applications = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div>
      <h2>Applications Component</h2>
    </div>
  );
};

export default Applications;
