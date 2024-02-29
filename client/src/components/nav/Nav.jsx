import React from "react";
import TransparentBtn from "../buttons/TransparentBtn";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "../Logo";
import SearchForm from "../form/SearchForm";
import SignInBtn from "../buttons/SignInBtn";
import UserProfilePopover from "../custom/CustomPopover";
import UserAvatar from "../custom/CustomAvatar";
import { useSelector } from "react-redux";
import UserProfilePopoverTrigger from "../user-profile/UserProfilePopoverTrigger";
import UserProfileContent from "../user-profile/UserProfileContent";

const Nav = () => {
  const { currentUser } = useSelector((store) => store.user);
  return (
    <nav className="flex items-center gap-3 h-20 px-3 bg-white/50 fixed top-0 left-0 z-20 w-full">
      <TransparentBtn>
        <HamburgerMenuIcon />
      </TransparentBtn>
      <Logo />
      <SearchForm />
      {!currentUser ? (
        <div className="ml-auto">
          <SignInBtn />
        </div>
      ) : (
        <UserProfilePopover>
          <UserProfilePopoverTrigger {...currentUser.data.user} />
          <UserProfileContent {...currentUser.data.user} />
        </UserProfilePopover>
      )}
    </nav>
  );
};

export default Nav;
