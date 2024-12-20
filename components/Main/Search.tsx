import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="px-5 relative">
      <div className="flex  items-center rounded-lg sm:w-[366px] border px-2 gap-0.5 p-0.5">
        <SearchIcon className="text-dark-1" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="p-2 border rounded-lg w-full border-none outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
