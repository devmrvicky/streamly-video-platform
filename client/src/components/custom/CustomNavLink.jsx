import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CostumeNavLink = ({
  path,
  name,
  icon,
  fillIcon,
  iconClass = "",
  iconTextClasses = "",
  className,
  activeClasses,
  noneActiveClasses,
}) => {
  const { asideCollapse } = useSelector((store) => store.page);
  return (
    <NavLink
      to={path}
      key={name}
      className={({ isActive }) =>
        isActive
          ? `${className} ${activeClasses}`
          : `${className} ${noneActiveClasses}`
      }
    >
      {({ isActive }) =>
        isActive ? (
          <div
            className={`"flex-1 gap-3 flex items-center justify-center ${iconClass}`}
          >
            {fillIcon} <span className={`${iconTextClasses}`}>{name}</span>
          </div>
        ) : (
          <div className={`flex-1 flex gap-3 items-center ${iconClass}`}>
            {icon} <span className={`${iconTextClasses}`}>{name}</span>
          </div>
        )
      }
    </NavLink>
  );
};

export default CostumeNavLink;
