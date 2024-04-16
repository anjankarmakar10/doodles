import { Search, UserRound } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

const Header = () => {
  return (
    <header className="flex text-slate-700 px-6 sm:px-10 md:px-[74px] h-20 shadow items-center justify-between">
      <Link className="font-bold text-[#f15700] text-3xl" href="/">
        Doodles
      </Link>
      <nav className="flex items-center gap-6 sm:gap-10 md:gap-20">
        <button className="flex group items-center gap-2">
          <Search
            size={20}
            className="transition-all group-focus:stroke-orange group-hover:stroke-orange"
          />

          <NavItemLabel>Search</NavItemLabel>
        </button>

        <Link href="/" className="flex group items-center gap-2">
          <UserRound
            size={20}
            className="transition-all group-focus:stroke-orange group-hover:stroke-orange"
          />

          <NavItemLabel>Sign In</NavItemLabel>
        </Link>

        <Link href="/" className="flex group items-center gap-2">
          <span className="relative block isolate">
            <svg
              className="group-focus:text-orange group-hover:text-orange fill-green group-focus:fill-orange group-hover:fill-orange transition-all"
              viewBox="-1 0 37 32"
              height="24"
              width="24"
            >
              <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
            </svg>
            <span className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              0
            </span>
          </span>
          <NavItemLabel>Favorite</NavItemLabel>
        </Link>
      </nav>
    </header>
  );
};

const NavItemLabel = ({ children }: PropsWithChildren) => (
  <span className="font-medium transition-all hidden sm:inline-block group-focus:text-orange group-hover:text-orange ">
    {children}
  </span>
);

export default Header;
