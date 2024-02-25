import { GoHome, GoHomeFill } from "react-icons/go";
import CostumeNavLink from "../custom/CustomNavLink";
import { shortsIcon, shortsFillIcon } from "@/assets";
import { GoHistory } from "react-icons/go";
import { LuHistory } from "react-icons/lu";
import {
  MdExplore,
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdVideoLibrary,
} from "react-icons/md";

const Aside = () => {
  const menus = [
    {
      name: "Home",
      path: "/",
      icon: <GoHome className="w-6 h-6" />,
      fillIcon: <GoHomeFill className="w-6 h-6" />,
    },
    {
      name: "Shorts",
      path: "/shorts",
      icon: shortsIcon,
      fillIcon: shortsFillIcon,
    },
    {
      name: "History",
      path: "/history",
      icon: <GoHistory className="w-6 h-6" />,
      fillIcon: <LuHistory className="w-6 h-6" />,
    },
    {
      name: "Library",
      path: "/library",
      icon: <MdOutlineVideoLibrary className="w-6 h-6" />,
      fillIcon: <MdVideoLibrary className="w-6 h-6" />,
    },
    {
      name: "Explore",
      path: "/explore",
      icon: <MdOutlineExplore className="w-6 h-6" />,
      fillIcon: <MdExplore className="w-6 h-6" />,
    },
  ];

  return (
    <aside className="fixed top-20 left-0 w-[200px] border-l bg-white h-full z-20 ">
      <div className="menus flex flex-col gap-3">
        {menus.map((menu) => (
          <CostumeNavLink
            key={menu.name}
            {...menu}
            className={`px-5 py-3 text-xl rounded-md flex items-center gap-3 md:w-auto w-12 max-[400px]:h-12 max-[400px]:rounded-full max-[400px]:justify-center`}
            activeClasses={`dark:text-black bg-zinc-200 `}
            noneActiveClasses={`hover:dark:text-black hover:bg-zinc-200`}
            iconClass="md:block hidden"
          />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
