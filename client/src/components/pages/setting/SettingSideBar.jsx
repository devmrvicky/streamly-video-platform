import CostumeNavLink from "@/components/custom/CustomNavLink";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarIcon } from "@radix-ui/react-icons";
import React from "react";

const SettingSideBar = ({ activeTab }) => {
  const menus = [
    {
      name: "Profile",
      path: "/setting?tab=profile",
      icon: <Avatar />,
      fillIcon: <AvatarIcon />,
    },
    {
      name: "Account",
      path: "/setting?tab=account",
      icon: <Avatar />,
      fillIcon: <AvatarIcon />,
    },
  ];
  return (
    <aside
      className={`fixed top-20 left-[60px] w-[200px] border-l bg-white h-full z-20 border-r transition-all px-1 border-t`}
    >
      <div className="menus flex flex-col gap-2">
        <p className="text-center py-4">Use settings</p>
        {menus.map((menu) => (
          <CostumeNavLink
            key={menu.name}
            {...menu}
            className={`px-2 py-1 text-lg rounded-md flex items-center gap-3 md:w-auto w-12 max-[400px]:h-12 max-[400px]:rounded-full max-[400px]:justify-center`}
            activeClasses={`${
              activeTab === menu.name.toLocaleLowerCase() &&
              "dark:text-black bg-zinc-200"
            }`}
            noneActiveClasses={`hover:dark:text-black hover:bg-zinc-200`}
          />
        ))}
      </div>
    </aside>
  );
};

export default SettingSideBar;
