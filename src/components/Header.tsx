import Link from "next/link";
import SiteLogo from "./ui/SiteLogo";

const Header = () => {
  return (
    <div className="">
      <header className="w-16">
        <div>
          <Link href="/">
            <SiteLogo />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
