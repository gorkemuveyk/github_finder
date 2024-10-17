import React from "react";
import {
  CiCircleList,
  CiCirclePlus,
  CiLocationOn,
  CiUser,
} from "react-icons/ci";

const UserLocation = ({ userData }) => {
  return (
    <div className="mt-4 text-xs md:text-base flex justify-between items-center border p-1 rounded-2xl">
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiLocationOn className="size-6" />{" "}
        <span>
          {userData.location ? userData.location.split(" ")[0] : "Location"}
        </span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiUser className="size-6" />{" "}
        <span>{userData.company ? userData.company : "Company"}</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiCircleList className="size-6" />{" "}
        <span>{userData.followers ? userData.followers : 0}</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiCirclePlus className="size-6" />{" "}
        <span>{userData.following ? userData.following : 0}</span>
      </div>
    </div>
  );
};

export default UserLocation;
