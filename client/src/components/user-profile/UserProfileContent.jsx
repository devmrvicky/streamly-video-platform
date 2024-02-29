import React from "react";
import UserProfileDetails from "./UserProfileDetails";
import LogoutBtn from "../buttons/LogoutBtn";

const UserProfileContent = (userDetails) => {
  return (
    <div className="flex flex-col gap-2">
      <UserProfileDetails {...userDetails} />
      <LogoutBtn />
    </div>
  );
};

export default UserProfileContent;
