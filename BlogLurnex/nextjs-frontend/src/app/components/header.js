import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[102px] bg-white shadow-md flex items-center justify-between px-8 z-10">
      {/* Logo */}
      <div className="text-3xl font-bold text-[#2DA9E1] font-['Quattrocento_Sans']">
        <Link href="/">Lurnex</Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex justify-end items-center space-x-2">
        <Link href="/" className="px-2 py-1 text-[#2DA9E1] font-['Quattrocento_Sans'] font-bold text-xl hover:bg-[#2DA9E11A] rounded-xl">
          Home
        </Link>
        <Link href="/about" className="px-2 py-1 text-[#2DA9E1] font-['Quattrocento_Sans'] font-bold text-xl hover:bg-[#2DA9E11A] rounded-xl">
          About
        </Link>
        <Link href="/learn" className="px-2 py-1 text-[#2DA9E1] font-['Quattrocento_Sans'] font-bold text-xl hover:bg-[#2DA9E11A] rounded-xl">
          Learn
        </Link>
        <Link href="/blog" className="px-2 py-1 text-[#2DA9E1] font-['Quattrocento_Sans'] font-bold text-xl hover:bg-[#2DA9E11A] rounded-xl">
          Blog
        </Link>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-3">
        <Link href="/signin">
          <button className="px-2 py-1 bg-[#2DA9E1] text-white font-['Quattrocento_Sans'] font-bold text-xl rounded-xl hover:bg-[#1B8DC0]">
            Sign in
          </button>
        </Link>
        <Link href="/register">
          <button className="px-2 py-1 bg-[#1B8DC0] text-[#F5F5F5] font-['Quattrocento_Sans'] font-bold text-xl rounded-xl hover:bg-[#2DA9E1]">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;