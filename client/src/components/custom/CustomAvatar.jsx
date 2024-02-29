import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { avatarImg } from "@/assets";

const CustomAvatar = ({ imgSrc, name }) => {
  const [fallback, setFallback] = useState("CN");
  useEffect(() => {
    if (!name) return;
    const nameArr = name.split(" ");
    if (nameArr.length < 2) {
      setFallback(nameArr[0][0].toUpperCase());
    } else {
      setFallback((nameArr[0][0] + nameArr[1][0]).toUpperCase());
    }
  });
  return (
    <Avatar className="w-full h-full">
      <AvatarImage src={`${imgSrc ? imgSrc : avatarImg}`} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
