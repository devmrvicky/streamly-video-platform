import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AuthenticationLayout = ({ authenticate = false }) => {
  const { status } = useSelector((store) => store.user);
  useEffect(() => {
    if (authenticate && status !== authenticate) {
    } else if (!authenticate && status !== authenticate) {
    }
  });
  return <div></div>;
};

export default AuthenticationLayout;
