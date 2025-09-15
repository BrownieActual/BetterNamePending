"use client";

import { navBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div>
      <header className="flex flex-row justify-between max-w-6xl min-w-128 mx-auto px-4 py-3 sm:px-6 mt-16 border-white border-2 rounded-lg bg-slate-600">
        <Link href="/" className="cursor-pointer flex items-center gap-4 px-4">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            BetterNamePending
          </h1>
        </Link>
        <nav className="flex flex-row items-center gap-6">
          {navBarLinks.map((item) => {
            const isActive = pathname === item.route;

            return (
              <Link
                className="cursor-pointer flex items-center gap-4 px-4"
                href={item.route}
                key={item.label}
              >
                <p
                  className={
                    "text-16 font-semibold " +
                    (isActive ? "text-white" : "text-gray")
                  }
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
