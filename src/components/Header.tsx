import Link from "next/link";
import SiteLogo from "./ui/SiteLogo";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="">
      <header className="w-16">
        <div>
          <Link href="/">
            <SiteLogo />
          </Link>
        </div>
        <ul>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
