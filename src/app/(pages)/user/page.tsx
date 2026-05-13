import Link from "next/link";
import {
  BookmarkIcon,
  FileSymlinkIcon,
  HistoryIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

export default function User() {
  return (
    <section className="flex flex-row items-center justify-center gap-4 mt-50 not-md:gap-1">
      <div className="flex items-center justify-center gap-1 cursor-pointer ">
        <span>img</span> <span>userId</span>
      </div>
      <div className="w-px h-5 mx-2 bg-foreground/30" />
      <div className="flex items-center justify-center gap-1 cursor-pointer min-w-10 min-h-10 hover:scale-103 not-lg:hover:scale-110">
        <UserIcon size={20} /> <span className="not-lg:hidden">Profile</span>
      </div>
      <Link href="/watching">
        <div className="flex items-center justify-center gap-1 cursor-pointer min-w-10 min-h-10 hover:scale-103 not-lg:hover:scale-110">
          <HistoryIcon size={20} />
          <span className="not-lg:hidden">Continue Watching</span>
        </div>
      </Link>
      <Link href="/bookmarks">
        <div className="flex items-center justify-center gap-1 cursor-pointer min-w-10 min-h-10 hover:scale-103 not-lg:hover:scale-110">
          <BookmarkIcon size={20} />
          <span className="not-lg:hidden">Bookmarks</span>
        </div>
      </Link>
      <Link href="/sync">
        <div className="flex items-center justify-center gap-1 cursor-pointer min-w-10 min-h-10 hover:scale-103 not-lg:hover:scale-110">
          <FileSymlinkIcon size={20} />
          <span className="not-lg:hidden">Sync</span>
        </div>
      </Link>
      <Link href="/settings">
        <div className="flex items-center justify-center gap-1 cursor-pointer min-w-10 min-h-10 hover:scale-103 not-lg:hover:scale-110">
          <SettingsIcon size={20} />
          <span className="not-lg:hidden">Settings </span>
        </div>
      </Link>
    </section>
  );
}
