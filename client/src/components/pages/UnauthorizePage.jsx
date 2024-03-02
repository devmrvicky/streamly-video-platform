import React from "react";
import SignInBtn from "../buttons/SignInBtn";

const UnauthorizePage = ({ pageTitle, message }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl">{pageTitle}</h1>
      <p className="text-sm">{message}</p>
      <SignInBtn />
    </div>
  );
};

export default UnauthorizePage;
