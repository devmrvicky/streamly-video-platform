import { GoHome, GoHomeFill } from "react-icons/go";
import CostumeNavLink from "../custom/CustomNavLink";
import {
  shortsIcon,
  shortsFillIcon,
  channelIcon,
  channelFillIcon,
} from "@/assets";
import { GoHistory } from "react-icons/go";
import { LuHistory } from "react-icons/lu";
import {
  MdExplore,
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdVideoLibrary,
} from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";

const Aside = () => {
  const { status } = useSelector((store) => store.user);
  const { asideCollapse } = useSelector((store) => store.page);
  console.log(asideCollapse);
  const menus = [
    {
      name: "Home",
      path: "/",
      icon: <GoHome />,
      fillIcon: <GoHomeFill />,
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
      icon: <GoHistory />,
      fillIcon: <LuHistory />,
    },
    {
      name: "Explore",
      path: "/explore",
      icon: <MdOutlineExplore />,
      fillIcon: <MdExplore />,
    },
  ];
  const authenticatedMenus = [
    {
      name: "My library",
      path: "/library",
      icon: <MdOutlineVideoLibrary />,
      fillIcon: <MdVideoLibrary />,
    },
    {
      name: "Subscriptions",
      path: "/subscription",
      icon: <MdOutlineSubscriptions />,
      fillIcon: <MdSubscriptions />,
    },
  ];

  return (
    <aside
      className={`fixed top-20 left-0 ${
        !asideCollapse ? "w-[60px]" : "w-[200px]"
      } border-l bg-white h-full z-20 border-r transition-all`}
    >
      <div className="menus flex flex-col gap-3">
        {menus.map((menu) => (
          <CostumeNavLink
            key={menu.name}
            {...menu}
            className={`${
              !asideCollapse ? "p-0 mx-1 justify-center" : "px-5"
            } py-3 text-xl rounded-md flex items-center gap-3 md:w-auto w-12 max-[400px]:h-12 max-[400px]:rounded-full max-[400px]:justify-center`}
            activeClasses={`dark:text-black bg-zinc-200 `}
            noneActiveClasses={`hover:dark:text-black hover:bg-zinc-200`}
            iconClass={`${!asideCollapse ? "hidden" : "md:block hidden"}`}
          />
        ))}
        {status && (
          <>
            <hr />
            {authenticatedMenus.map((menu) => (
              <CostumeNavLink
                key={menu.name}
                {...menu}
                className={`${
                  !asideCollapse ? "p-0 mx-1 justify-center" : "px-5"
                } py-3 text-xl rounded-md flex items-center gap-3 md:w-auto w-12 max-[400px]:h-12 max-[400px]:rounded-full max-[400px]:justify-center`}
                activeClasses={`dark:text-black bg-zinc-200 `}
                noneActiveClasses={`hover:dark:text-black hover:bg-zinc-200`}
                iconClass={`${!asideCollapse ? "hidden" : "md:block hidden"}`}
              />
            ))}
          </>
        )}
      </div>
    </aside>
  );
};

export default Aside;
