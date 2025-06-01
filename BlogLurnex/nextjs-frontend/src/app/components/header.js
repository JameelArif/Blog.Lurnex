import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative w-full h-auto bg-white shadow-md px-4 py-3 z-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold text-[#2DA9E1] font-['Quattrocento_Sans']">
          <Link href="/">Lurnex</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-2 w-full sm:w-auto">
          <Link href="/" className="text-[#2DA9E1] font-['Quattrocento_Sans'] font-bold text-base sm:text-xl hover:bg-[#2DA9E11A] px-2 py-1 rounded-xl">
            Home
          </Link>
          <Link href="/about" className="text-[#2DA9E1] font-['Quattrocento_Sans'] font-bold text-base sm:text-xl hover:bg-[#2DA9E11A] px-2 py-1 rounded-xl">
            About
          </Link>
          <Link href="/learn" className="text-[#2DA9E1] font-['Quattrocento_Sans'] font-bold text-base sm:text-xl hover:bg-[#2DA9E11A] px-2 py-1 rounded-xl">
            Learn
          </Link>
          <Link href="/blog" className="text-[#2DA9E1] font-['Quattrocento_Sans'] font-bold text-base sm:text-xl hover:bg-[#2DA9E11A] px-2 py-1 rounded-xl">
            Blog
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex flex-wrap justify-end items-center gap-2 w-full sm:w-auto">
          <Link href="/signin">
            <button className="bg-[#2DA9E1] text-white font-['Quattrocento_Sans'] font-bold text-base sm:text-xl px-3 py-1 rounded-xl hover:bg-[#1B8DC0]">
              Sign in
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-[#1B8DC0] text-[#F5F5F5] font-['Quattrocento_Sans'] font-bold text-base sm:text-xl px-3 py-1 rounded-xl hover:bg-[#2DA9E1]">
              Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
