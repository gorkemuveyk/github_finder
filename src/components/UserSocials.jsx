import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuType } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";

const UserSocials = ({ userData }) => {
  return (
    <div className="mt-4 flex flex-col justify-between items-start border p-1 rounded-2xl">
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <TbWorld className="size-6" />{" "}
        <span>{userData.html_url ? userData.html_url : "URL"}</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <FiGithub className="size-6" />{" "}
        <span>{userData.id ? userData.id : "ID"}</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <FaRegStar className="size-6" />{" "}
        <span>{userData.public_repos ? userData.public_repos : "Repos"}</span>
      </div>
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <LuType className="size-6" />{" "}
        <span>{userData.type ? userData.type : "Type"}</span>
      </div>
    </div>
  );
};

export default UserSocials;
