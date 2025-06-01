import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative w-full bg-white shadow-md px-[2vw] py-[2vw] z-10">
      <div className="flex flex-wrap items-center justify-between gap-[1vw]">
        {/* Logo */}
        <div style={{ fontSize: 'clamp(14px, 4vw, 28px)' }} className="font-bold text-[#2DA9E1] font-['Quattrocento_Sans']">
          <Link href="/">Lurnex</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-[1.5vw]">
          {['Home', 'About', 'Learn', 'Blog'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-[#2DA9E1] font-bold font-['Quattrocento_Sans'] hover:bg-[#2DA9E11A] rounded-md px-[1vw] py-[0.5vw]"
              style={{ fontSize: 'clamp(10px, 3vw, 20px)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-[1vw]">
          <Link href="/signin">
            <button
              className="bg-[#2DA9E1] text-white font-bold font-['Quattrocento_Sans'] rounded-md hover:bg-[#1B8DC0]"
              style={{
                padding: '0.5vw 1vw',
                fontSize: 'clamp(10px, 2.5vw, 18px)',
              }}
            >
              Sign in
            </button>
          </Link>
          <Link href="/register">
            <button
              className="bg-[#1B8DC0] text-white font-bold font-['Quattrocento_Sans'] rounded-md hover:bg-[#2DA9E1]"
              style={{
                padding: '0.5vw 1vw',
                fontSize: 'clamp(10px, 2.5vw, 18px)',
              }}
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
