"use client";
import React, { useState } from "react";
import Logo from "../Sidebar/Logo";
import { MenuIcon, X } from "lucide-react";
import NameDisplay from "../Sidebar/NameDisplay";
import SideLinks, { SideBottomLinks } from "../Sidebar/SideLinks";

const MobileNav = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col relative sm:hidden ">
      <div className=" w-full flex items-center justify-between p-2 px-3 bg-white">
        <Logo />
        <button className="transition-all" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      { (
        <div
          className={`
            absolute top-12 z-[999] w-full 
            transition-all duration-1000
            ${open ? "opacity-100 translate-y-0" : "opacity-70 -translate-y-[30rem] pointer-events-none"}
          `}
        >
          <div className="bg-white w-full p-2 flex flex-col ">
            <NameDisplay />
            <SideLinks />
            <SideBottomLinks />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
