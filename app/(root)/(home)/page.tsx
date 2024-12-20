import Badge from "@/components/Badge/badge";
import Search from "@/components/Main/Search";
import TopBar from "@/components/Main/TopBar";
import { Repos } from "@/constants";
import { Database } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="w-full rounded-xl sm:border shadow-md">
      <div className=" pb-5">
        <TopBar />
        <Search />
      </div>
      <div className="w-full">
        {Repos.map((repo, index) => (
          <div key={index} className="flex flex-col p-5 border-t hover:bg-black/20 cursor-pointer">
            <div className="flex items-center gap-2">
              <h1 className="text-[20px]">{repo.name}</h1>
              <Badge>{repo.tag}</Badge>
            </div>
            <div className="flex items-center justify-start pt-2 sm:gap-5 gap-3 text-nowrap">
              <div className="flex items-center gap-2">
                <p className="sm:text-[16px] text-sm text-dark-1">{repo.lang}</p>
                <div className="rounded-full size-2 bg-blue-500"></div>
              </div>
              <div className="flex items-center gap-2">
                <Database className="size-3 " />
                <p className="sm:text-[16px] text-sm text-dark-1">{repo.size} KB</p>
              </div>
              <p className="sm:text-[16px] text-sm text-dark-1">Updated {repo.updated} days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
