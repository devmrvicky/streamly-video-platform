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
    <Avatar className="w-full h-full">
      <AvatarImage
        src={`${
          imgSrc
            ? imgSrc
            : "https://lh3.googleusercontent.com/-O8Cobxb-AqQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkn0XwyPfQm7zkQXDRB3nbvnfpqscw/s128-c/photo.jpg"
        }`}
      />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
