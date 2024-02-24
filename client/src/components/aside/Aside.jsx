import { GoHome, GoHomeFill } from "react-icons/go";
import CostumeNavLink from "../custom/CustomNavLink";

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
      path: "/",
      icon: <GoHome className="w-6 h-6" />,
      fillIcon: <GoHomeFill className="w-6 h-6" />,
    },
    {
      name: "History",
      path: "/",
      icon: <GoHome className="w-6 h-6" />,
      fillIcon: <GoHomeFill className="w-6 h-6" />,
    },
    {
      name: "Library",
      path: "/",
      icon: <GoHome className="w-6 h-6" />,
      fillIcon: <GoHomeFill className="w-6 h-6" />,
    },
    {
      name: "Explore",
      path: "/",
      icon: <GoHome className="w-6 h-6" />,
      fillIcon: <GoHomeFill className="w-6 h-6" />,
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
