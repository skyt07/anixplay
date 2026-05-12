"use client ";

import { SearchIcon, FilterIcon, XIcon } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

const SearchFunction = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="flex items-center gap-1 px-1 py-[3.2px] h-10 border-2 border-white/20 rounded-lg focus-within:border-white/40 bg-black/30 backdrop-blur-smw-[calc(100%-1rem)] mx-auto md:w-auto md:px-1 md:border-2 md:gap-1 md:h-10 md:rounded-lg">
        <label htmlFor="?"></label>
        <div className="">
          <SearchIcon size={23} />
        </div>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search Anime..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 min-w-0 text-sm text-white bg-transparent outline-none md:min-w-62.75 placeholder:text-gray-400"
        />
        {/* Clear (X) button */}
        <div className="flex items-center justify-center w-6 h-6 p-1">
          <button
            type="button"
            onClick={clearSearch}
            className={`transition-opacity duration-150 ${
              query.length > 0 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <XIcon size={20} />
          </button>
        </div>
        {/* <button
          type="submit"
          className="flex items-center justify-center p-1 cursor-pointer"
        >
          <SearchIcon size={20} />
        </button> */}
        <Link href="/browse">
          <button className="flex items-center justify-center p-1.5 transition bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 hover:shadow active:bg-white/30">
            <FilterIcon
              size={14}
              className=" fill-foreground stroke-foreground"
            />
            <h6 className="text-foreground">FILTER</h6>
          </button>
        </Link>
      </div>
    </>
  );
};
export default SearchFunction;
