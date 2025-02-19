import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-primary">
          MyBlog
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
