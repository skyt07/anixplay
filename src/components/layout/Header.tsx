import Link from "next/link";
import { UserIcon } from "lucide-react";

import LangSwitch from "../LangSwitch";
import SiteLogo from "../ui/SiteLogo";
import ThemeSwitch from "../settings/ThemeSwitch";

const Header = () => {
  return (
    <section className="">
      <header className="flex items-center justify-between w-16">
        <div>
          <Link href="/">
            <SiteLogo />
          </Link>
        </div>
        <ul className="flex items-center">
          <li>
            <ThemeSwitch />
          </li>
          <li>
            <LangSwitch />
          </li>
          <li className="">
            <Link href="/settings">
              <UserIcon />
            </Link>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default Header;
