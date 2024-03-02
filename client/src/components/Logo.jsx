import { logoIcon } from "@/assets";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex gap-2 items-center">
      <div className="w-8 h-8">{logoIcon}</div>
      <p className="text-2xl">STREAMLY</p>
    </Link>
  );
};

export default Logo;
