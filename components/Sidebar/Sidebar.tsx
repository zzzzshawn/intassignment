import React from "react";
import Logo from "./Logo";
import SideLinks, { SideBottomLinks } from "./SideLinks";
import NameDisplay from "./NameDisplay";

const Sidebar = () => {
  return (
    <div className=" max-w-[300px] w-[262px] h-screen p-5 flex flex-col justify-between max-sm:hidden">
      <div className="w-full">
        <Logo />
        <NameDisplay/>
        <SideLinks />
      </div>
      <SideBottomLinks/>
    </div>
  );
};

export default Sidebar;
