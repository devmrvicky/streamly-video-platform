import React, { useEffect, useState } from "react";
import SettingSideBar from "./SettingSideBar";
import ContentLayout from "@/components/layout/ContentLayout";
import { BrowserRouter, useLocation } from "react-router-dom";
import ProfileSetting from "./ProfileSetting";
import AccountSetting from "./AccountSetting";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    setActiveTab(urlParams.get("tab"));
  }, [location.search]);
  return (
    <div className="flex flex-col ml-[260px] mt-20 border-t">
      <SettingSideBar activeTab={activeTab} />
      {activeTab === "profile" && <ProfileSetting />}
      {activeTab === "account" && <AccountSetting />}
    </div>
  );
};

export default Setting;
