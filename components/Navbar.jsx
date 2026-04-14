import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full text-white relative">
      <div className="max-w-7xl mx-auto flex items-center px-6 md:px-16 py-4">
        
        {/* Logo (Left) */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Center Nav Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-8 text-base font-medium tracking-wide">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT US</Link>

          <Link href="/tours">TOURS</Link>
          <Link href="/trekking">TREKKING</Link>
          <Link href="/expeditions">EXPEDITIONS</Link>
          <Link href="/contact">CONTACT US</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;