import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link href={"/"}>My Next Project</Link>
      </h1>
      <div className="links">
        <Link href="/about">About</Link>
        <Link href="/about/team">Our Team</Link>
        <Link href="/code/repo">Code</Link>
      </div>
    </header>
  );
}

export default Header;
