import React from "react";
import { ButtonLoading } from "./ButtonLoading";
import { Button } from "../ui/button";

const SubmitButton = ({ loading, btnText }) => {
  return !loading ? (
    <Button type="submit" className="w-full">
      {btnText}
    </Button>
  ) : (
    <ButtonLoading />
  );
};

export default SubmitButton;
