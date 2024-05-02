import { UserRound, Soup } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import SearchBox from "./search-box";
import FavoriteLink from "./FavoriteLink";
import { currentUser } from "@clerk/nextjs/server";
import Profile from "./profile";
const Header = async () => {
  const user = await currentUser();

  return (
    <header className="flex top-0 w-full sticky text-slate-700 px-6 sm:px-10 md:px-[74px] h-20 bg-white z-50 items-center justify-between">
      <Link
        className="font-bold text-[#f15700] md:hover:scale-105 transition-all will-change-transform text-3xl"
        href="/"
      >
        Doodles
      </Link>
      <nav className="flex items-center gap-6 sm:gap-5 md:gap-10 lg:gap-16">
        <SearchBox />

        <Link
          href="/cuisines?country=indian"
          className="flex group items-center gap-2"
        >
          <Soup
            size={20}
            className="transition-all group-focus:stroke-orange group-hover:stroke-orange"
          />

          <NavItemLabel>Cuisines</NavItemLabel>
        </Link>

        {!user ? (
          <Link href="/sign-in" className="flex group items-center gap-2">
            <UserRound
              size={20}
              className="transition-all group-focus:stroke-orange group-hover:stroke-orange"
            />

            <NavItemLabel>Sign In</NavItemLabel>
          </Link>
        ) : null}
        {user ? <FavoriteLink /> : null}
        {user ? <Profile /> : null}
      </nav>
    </header>
  );
};

export const NavItemLabel = ({ children }: PropsWithChildren) => (
  <span className="font-medium transition-all hidden sm:inline-block group-focus:text-orange group-hover:text-orange ">
    {children}
  </span>
);

export default Header;
