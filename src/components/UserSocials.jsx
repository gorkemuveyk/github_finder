import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuType } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";

const UserSocials = () => {
  return (
    <div className="mt-4 flex flex-col justify-between items-start border p-1 rounded-2xl">
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <TbWorld className="size-6" /> <span>Turkiye</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <FiGithub className="size-6" /> <span>K.Adi</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <FaRegStar className="size-6" /> <span>0</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <LuType className="size-6" /> <span>0</span>
      </div>
    </div>
  );
};

export default UserSocials;
