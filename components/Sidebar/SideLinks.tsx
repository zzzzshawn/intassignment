'use client'
import { SideBarBottomLinks, SideBarLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

const SideLinks = () => {

  const [select, setSelect] = useState<number | null>(0)

  return (
    <div className="pt-2">
      {SideBarLinks.map((link, index) => (
        <div key={index} className={`p-2 sm:p-3 flex items-center gap-3 cursor-pointer ${select === index ? "bg-[#DE690C] text-black invert": "text-dark-1"} rounded-lg`} onClick={() => setSelect(index)}>
          {link.Icon}
          <h1 className="text-base  font-semibold text-nowrap">{link.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SideLinks;

export const SideBottomLinks = () => {
  return (
    <div className="w-full">
      {SideBarBottomLinks.map((link, index) => (
        <Link href={link.href ?? "/"} key={index} className="p-3 flex items-center gap-3 ">
          {link.Icon}
          <h1 className="text-base text-dark-1 font-semibold">{link.name}</h1>
        </Link>
      ))}
    </div>
  );
};
