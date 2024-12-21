"use client";
import React, { useState } from "react";
import Logo from "../Sidebar/Logo";
import { providers, self_hosted } from "@/constants";
import Link from "next/link";

const Options = () => {
  const [selected, setSelected] = useState<string>("saas");

  return (
    <div className="border-r flex flex-col gap-8 items-center justify-center w-full h-screen relative font-inter bg-[#fafafa] px-2">
      <div className="sm:max-w-[672px] sm:w-full sm:h-[603px] w-[408px] h-[582px] border rounded-lg  py-10 px-2 bg-white shadow-custom flex flex-col items-center justify-start">
        <div className="text-dark-3 border-b w-full flex flex-col items-center pb-8">
          <div className="font-semibold">
            <Logo />
          </div>
          <h1 className="text-[32px] font-semibold text-dark-3">
            Welcome to CodeAnt AI
          </h1>
          <div className="border sm:max-w-[624px] sm:w-full sm:h-[60px] w-[95%] mx-auto rounded-lg flex items-center justify-center overflow-hidden mt-5 b">
            <button
              id="saas"
              className={`p-2 text-dark-1  size-full rounded-lg text-[20px] ${
                selected === "saas" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setSelected("saas")}
            >
              SAAS
            </button>
            <button
              id="self"
              className={`p-2 text-dark-1  size-full rounded-lg text-[20px] ${
                selected === "self" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setSelected("self")}
            >
              Self Hosted
            </button>
          </div>
        </div>
        <div className="sm:w-[446px] w-[95%] pt-8 mx-auto space-y-5">
          {selected === "saas"
            ? providers.map((provider) => (
                <Link href={`/`}
                  key={provider.name}
                  className="flex items-center justify-center font-semibold border rounded-lg  py-3"
                >
                  <div className="flex items-center">
                    {provider.Icon}
                    <h2 className="text-dark-3 text-[20px] ml-3">
                      Sign in with {provider.name}
                    </h2>
                  </div>
                </Link>
              ))
            : self_hosted.map((provider) => (
                <Link href={`/`}
                  key={provider.name}
                  className="flex items-center justify-center font-semibold border rounded-lg  py-3"
                >
                  <div className="flex items-center">
                    {provider.Icon}
                    <h2 className="text-dark-3 text-[20px] ml-3">
                      Sign in with {provider.name}
                    </h2>
                  </div>
                </Link>
              ))}
        </div>
      </div>
      <div className="">
        <p className="text-dark-3">
          By signing up you agree to the{" "}
          <span className="font-bold ">Privacy Policy.</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Options;
