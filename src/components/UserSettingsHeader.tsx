"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import { BookmarkIcon, FileSymlinkIcon, HistoryIcon } from "lucide-react";

const UserSettingsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-lg border transition border-[#fff3] bg-white/10 hover:bg-white/20 active:bg-white/30 hover:scale-105"
      >
        <UserIcon className="text-foreground" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-55 p-4 bg-background border border-[#fff4] rounded-[10px] shadow-lg backdrop-blur-md z-50 not-sm:w-50 not-sm:py-2">
          <ul className="text-[1rem] text-foreground">
            <li className="px-3 py-3 mb-1 transition rounded-lg bg-foreground/5 not-sm:py-2">
              <div className="flex items-center justify-between line-clamp-1 ">
                <Link href="/user">
                  {/* fix this area */}
                  <div className="flex w-30 not-sm:w-26 line-clamp-1 hover:scale-102 active:scale-95">
                    UserId
                  </div>
                </Link>
                <span className="flex items-center transition rounded-lg cursor-pointer hover:scale-105 active:scale-95">
                  <LogOutIcon size={17} />
                </span>
              </div>
            </li>
            <Link href="/user/profile">
              <li className="flex items-center gap-2 px-3 py-1 transition rounded-lg cursor-pointer hover:bg-foreground/10 hover:scale-105 not-sm:py-1 not-sm:px-1 active:scale-95 not-sm:gap-1">
                <UserIcon size={17} /> Profile
              </li>
            </Link>
            <Link href="/user/watching">
              <li className="flex items-center gap-2 px-3 py-1 transition rounded-lg cursor-pointer hover:bg-foreground/10 hover:scale-105 not-sm:py-1 not-sm:px-1 active:scale-95 active:bg-foreground/10 not-sm:gap-1">
                <HistoryIcon size={17} /> Continue Watching
              </li>
            </Link>
            <Link href="/user/bookmarks">
              <li className="flex items-center gap-2 px-3 py-1 transition rounded-lg cursor-pointer hover:bg-foreground/10 hover:scale-105 not-sm:py-1 not-sm:px-1 active:scale-95 active:bg-foreground/10 not-sm:gap-1">
                <BookmarkIcon size={17} /> Bookmarks
              </li>
            </Link>
            <Link href="/user/sync">
              <li className="flex items-center gap-2 px-3 py-1 transition rounded-lg cursor-pointer hover:bg-foreground/10 hover:scale-105 not-sm:py-1 not-sm:px-1 active:scale-95 active:bg-foreground/10 not-sm:gap-1">
                <FileSymlinkIcon size={17} /> Import / Export
              </li>
            </Link>
            <Link href="/user/settings">
              <li className="flex items-center gap-2 px-3 py-1 transition rounded-lg cursor-pointer hover:bg-foreground/10 hover:scale-105 not-sm:py-1 not-sm:px-1 active:scale-95 active:bg-foreground/10 not-sm:gap-1">
                <SettingsIcon size={17} /> Settings
              </li>
            </Link>
            <Link href="">
              <li className="flex items-center gap-2 px-3 py-1 transition rounded-lg cursor-pointer hover:bg-foreground/10 hover:scale-105 not-sm:py-1 not-sm:px-1 active:scale-95 active:bg-foreground/10 not-sm:gap-1">
                <LogOutIcon size={17} /> Logout
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};
export default UserSettingsHeader;
