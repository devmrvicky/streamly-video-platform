import { cloneElement } from "react";
import { Button } from "../ui/button";

const TransparentBtn = ({
  children,
  iconWidth = "25px",
  iconHeight = "25px",
}) => {
  const icon = cloneElement(children, {
    style: {
      width: iconWidth,
      height: iconHeight,
    },
  });
  return (
    <Button
      variant="outline"
      className="border-none shadow-none rounded-full w-12 h-12 p-0 active:bg-zinc-500/20"
    >
      {icon}
    </Button>
  );
};

export default TransparentBtn;
