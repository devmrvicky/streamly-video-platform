import React from "react";
import UserAvatar from "../custom/CustomAvatar";

const UserProfile = ({ avatar, fullName, username }) => {
  // console.log({ avatar, name, username });
  return (
    <div className="w-full border p-2 flex items-center gap-4">
      <div className="profile-img w-24 h-24 rounded-full border">
        <UserAvatar imgSrc={avatar} name={fullName} />
      </div>
      <div>
        <p className="text-5xl mb-2">{fullName}</p>
        <span className="text-xl text-zinc-700">{username}</span>
      </div>
    </div>
  );
};

export default UserProfile;
