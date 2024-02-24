import React from "react";
import TransparentBtn from "../buttons/TransparentBtn";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "../Logo";
import SearchForm from "../form/SearchForm";
import SignInBtn from "../buttons/SignInBtn";

const Nav = () => {
  return (
    <nav className="flex items-center gap-3 h-20 px-3 bg-white/50 fixed top-0 left-0 z-20 w-full">
      <TransparentBtn>
        <HamburgerMenuIcon />
      </TransparentBtn>
      <Logo />
      <SearchForm />
      <div className="ml-auto">
        <SignInBtn />
      </div>
    </nav>
  );
};

export default Nav;
