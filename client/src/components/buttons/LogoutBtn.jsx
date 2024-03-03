import React, { useState } from "react";
import { Button } from "../ui/button";
import { ButtonLoading } from "./ButtonLoading";
import api from "@/axios/api";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "@/redux/features";
import { useToast } from "../ui/use-toast";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { getErrorMsg } from "../custom/AlertDestructive";
import { BsBoxArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const handleLogout = async () => {
    try {
      setLoading(true);
      // const res = await api.post("/users/logout");
      dispatch(logoutSuccess());
      // console.log(res);
      toast({
        description: "user logout successfully",
      });
      navigate("/");
    } catch (error) {
      // console.log(error);
      toast({
        variant: "destructive",
        description: getErrorMsg(
          error?.response ? error.response?.data : error.message
        ),
      });
    } finally {
      setLoading(false);
    }
  };
  return !loading ? (
    <Button
      variant="outline"
      onClick={handleLogout}
      className="flex items-center gap-4"
    >
      <BsBoxArrowRight className="w-5 h-5" />
      <span>logout</span>
    </Button>
  ) : (
    <ButtonLoading />
  );
};

export default LogoutBtn;
