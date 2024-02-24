import React from "react";

const ContentLayout = ({ children }) => {
  return (
    <div className=" h-full ml-[200px] mt-[80px] p-3 bg-zinc-200/10 border-t">
      {children}
    </div>
  );
};

export default ContentLayout;
