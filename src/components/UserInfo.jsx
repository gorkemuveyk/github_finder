import React from "react";
import UserText from "./UserText";

import UserLocation from "./UserLocation";

const UserInfo = () => {
  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <UserText />
      <UserLocation />
    </div>
  );
};

export default UserInfo;
