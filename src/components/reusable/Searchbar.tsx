"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="w-auto max-w-min flex border flex-row items-center rounded-md group group-active:bg-red-500 h-8 border-primary">
      <input className="w-48 outline-none hover:ring-0 hover:outline-none h-full border px-2 rounded-md" />
      <span className="cursor-pointer h-full flex items-center bg-sky-100 hover:bg-sky-200 hover:text-sky-500 text-sky-400 rounded-r-md">
        <Search size={24} className="font-semibold mx-2" />
      </span>
    </div>
  );
};

export default Searchbar;
