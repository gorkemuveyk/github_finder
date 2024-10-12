import React from "react";
import {
  CiCircleList,
  CiCirclePlus,
  CiLocationOn,
  CiUser,
} from "react-icons/ci";

const UserLocation = () => {
  return (
    <div className="mt-4 flex justify-between items-center border p-1 rounded-2xl">
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiLocationOn className="size-6" /> <span>Turkiye</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiUser className="size-6" /> <span>K.Adi</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiCircleList className="size-6" /> <span>0</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiCirclePlus className="size-6" /> <span>0</span>
      </div>
    </div>
  );
};

export default UserLocation;
