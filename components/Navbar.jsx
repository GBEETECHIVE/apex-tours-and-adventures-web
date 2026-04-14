"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "TOURS", path: "/tours" },
  { label: "TREKKING", path: "/trekking" },
  { label: "EXPEDITIONS", path: "/expeditions" },
  { label: "CONTACT US", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-transparent text-white shadow-sm  ">
      <div className="max-w-[937px] w-full  flex items-center  justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo white.png"
            alt="APEX Tours & Adventures"
            width={100}
            height={100}
            className="h-24 w-auto"
          />
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 max-w-[530px] w-full">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors text-white hover:text-orange-500 ${
                  pathname === link.path
                    ? "text-orange-500 border-b-2 border-orange-500 pb-0.5"
                    : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
