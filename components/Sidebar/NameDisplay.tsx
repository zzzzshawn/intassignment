import { ChevronDown } from "lucide-react";
import React from "react";

const NameDisplay = () => {
  return (
    <div className="border w-full flex items-center justify-between gap-3 p-2 mb-2 rounded-lg">
      <p className="font-extralight text-[16px]">Shawn dsilva...</p>
      <ChevronDown className="w-[22px] text-dark-1" />
    </div>
  );
};

export default NameDisplay;
