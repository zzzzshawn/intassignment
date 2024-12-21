import { ArrowUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const SignInBanner = () => {
  return (
    <div className="border-r hidden lg:flex items-center justify-center w-full h-screen relative font-inter">
      <Image
        src="/assets/Subtract.svg"
        alt="logo"
        width={284}
        height={319}
        className="absolute  bottom-0 left-0"
      />
      <div className="z-10 flex flex-col items-end">
        <div className="flex flex-col w-[450px] mx-auto bg-white overflow-hidden text-dark-2 font-bold justify-center rounded-3xl shadow-custom">
          <div className="flex gap-3 items-center p-4 border-b">
            <Image src="/assets/logo.svg" alt="logo" width={28} height={31} />
            <p className=" text-[18px]">AI to Detect & Autofix Bad Code</p>
          </div>
          <div className="flex items-center justify-around gap-3 py-5 shadow-custom px-5">
            <div className="text-dark-2 flex flex-col items-center justify-center">
              <p className="">30+</p>
              <p className="font-extralight text-[14px]">Language Support</p>
            </div>
            <div className="text-dark-2 flex flex-col items-center justify-center">
              <p className="">10K+</p>
              <p className="font-extralight text-[14px]">Developers</p>
            </div>
            <div className="text-dark-2 flex flex-col items-center justify-center">
              <p className="">100K+</p>
              <p className="font-extralight text-[14px]">Hours Saved</p>
            </div>
          </div>
        </div>
        <div className="shadow-custom w-[265px] h-[165px] bg-white rounded-3xl p-4 px-8 -translate-y-3 translate-x-5">
          <div className="flex items-center justify-between">
            <Image src="/assets/circle.svg" alt="logo" width={56} height={56} />
            <div className="">
              <div className="flex text-[#0049c6] items-start justify-start gap-1 font-bold">
                <ArrowUp width={18} height={21} />
                <p>14%</p>
              </div>
              <p className="text-black px-1">This week</p>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-bold text-black font-inter">Issues Fixed </p>
            <p className="font-bold text-black text-[32px] leading-10 font-inter">
              500K +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInBanner;
