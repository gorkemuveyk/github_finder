import React from "react";
import UserText from "./UserText";
import UserLocation from "./UserLocation";
import UserSocials from "./UserSocials";

const UserInfo = () => {
  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <UserText />
      <UserLocation />
      <UserSocials />
    </div>
  );
};

export default UserInfo;
