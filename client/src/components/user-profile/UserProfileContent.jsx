import React from "react";
import UserProfileDetails from "./UserProfileDetails";
import LogoutBtn from "../buttons/LogoutBtn";
import CustomNavLink from "../custom/CustomNavLink";
import { AvatarIcon } from "@radix-ui/react-icons";

const UserProfileContent = (userDetails) => {
  return (
    <div className="flex flex-col gap-2">
      <UserProfileDetails {...userDetails} />
      <div
        className={`before:content-["Personal"] before:text-sm before:text-zinc-600 `}
      >
        <CustomNavLink
          name="Profile"
          path="/profile"
          icon={<AvatarIcon className="w-5 h-5" />}
          fillIcon={<AvatarIcon />}
          className={`px-5 py-1 text-xl rounded-md flex items-center gap-3 md:w-auto w-12 max-[400px]:h-12 max-[400px]:rounded-full max-[400px]:justify-center`}
          activeClasses={`dark:text-black bg-zinc-200 `}
          noneActiveClasses={`hover:dark:text-black hover:bg-zinc-100`}
          iconClass="md:block hidden text-lg"
        />
      </div>
      <LogoutBtn />
    </div>
  );
};

export default UserProfileContent;
