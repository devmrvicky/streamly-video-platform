import React from "react";
import { Button } from "../ui/button";
import { AvatarIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const SignInBtn = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2"
      onClick={() => navigate("/user/register")}
    >
      <AvatarIcon />
      <span>Sign in</span>
    </Button>
  );
};

export default SignInBtn;
