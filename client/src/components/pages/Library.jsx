import React from "react";
import UnauthorizePage from "./UnauthorizePage";
import { useSelector } from "react-redux";
import UserProfile from "../user-profile/UserProfile";
import ContentLayout from "../layout/ContentLayout";

const Library = () => {
  const { status, currentUser } = useSelector((store) => store.user);
  console.log(currentUser.data.user);
  return (
    <div className="flex w-full h-full items-center justify-center">
      <ContentLayout maxWidth="max-w-[1000px]" className="w-full">
        {status ? (
          <div className="w-full">
            <UserProfile {...currentUser.data.user} />
          </div>
        ) : (
          <UnauthorizePage
            pageTitle="Library"
            message="To create your playlist and to see your liked video. please login first"
          />
        )}
      </ContentLayout>
    </div>
  );
};

export default Library;
