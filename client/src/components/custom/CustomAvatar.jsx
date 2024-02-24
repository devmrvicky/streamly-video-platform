import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

const CustomAvatar = ({ imgSrc, name }) => {
  const [fallback, setFallback] = useState("CN");
  useEffect(() => {
    if (!name) return;
    if (name.length < 2) {
      setFallback(name[0].toUpperCase());
    } else {
      setFallback((name.split(" ")[0] + name.split(" ")[1]).toUpperCase());
    }
  });
  return (
    <Avatar>
      <AvatarImage
        src={`${imgSrc ? imgSrc : "https://github.com/shadcn.png"}`}
      />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
