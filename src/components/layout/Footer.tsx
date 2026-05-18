import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" px-8 max-[640px]:px-4 box-content  items-center">
      {/* Footer Upper Section*/}
      <div className=""></div>
      {/* Footer Lower Section*/}
      <div className="">
        <p className=""> © 2025 AnixPlay. All rights reserved.</p>
        <p className="">
          This site does not store any files on its server. All contents are
          provided by non-affiliated third parties
          <Link href="/aboutMe">.</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
