import React from "react";
import { useSelector } from "react-redux";
import UnauthorizePage from "./UnauthorizePage";

const History = () => {
  const { status } = useSelector((store) => store.user);
  return (
    <div className="flex w-full h-custom items-center justify-center">
      <p className="text-2xl">
        {status ? (
          "history"
        ) : (
          <UnauthorizePage
            pageTitle="History"
            message="To see your watch history. Please login first"
          />
        )}
      </p>
    </div>
  );
};

export default History;
