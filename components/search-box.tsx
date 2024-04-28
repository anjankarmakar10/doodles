"use client";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { NavItemLabel } from "./header";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import useSearchSuggestions from "@/hooks/useSearchSuggestions";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useRouter } from "next/navigation";
const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const data = useSearchSuggestions(searchQuery);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dialogClose = () => setOpen(!open);

  const handleKeyUp = (event: any) => {
    if (data.state === "success") {
      const keyCode = event.keyCode;
      if (searchQuery === "") return;

      if (keyCode === 13) {
        if (activeIndex !== -1) {
          router.push(`/search?query=${data.data[activeIndex].title}`);
          setActiveIndex(-1);
        } else {
          router.push(`/search?query=${searchQuery}`);
        }
        dialogClose();
      }

      if (data.data.length === 0) return;

      if (keyCode === 40) {
        //user down

        if (activeIndex === -1 || activeIndex === data.data?.length - 1) {
          setActiveIndex(0);
        } else {
          setActiveIndex((prev) => prev + 1);
        }
      } else if (keyCode === 38) {
        // user up
        if (activeIndex === -1 || activeIndex === 0) {
          setActiveIndex(data.data?.length - 1);
        } else {
          setActiveIndex((prev) => prev - 1);
        }
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="flex group items-center gap-2">
          <Search
            size={20}
            className="transition-all group-focus:stroke-orange group-hover:stroke-orange"
          />

          <NavItemLabel>Search</NavItemLabel>
        </div>
      </DialogTrigger>
      <DialogContent className="min-h-96">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              <div className="pt-3 ">
                <Input
                  onKeyUp={handleKeyUp}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="font-normal focus-visible:ring-2 focus-visible:ring-orange"
                  type="search"
                  placeholder="Search recipe..."
                />
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="pt-2 h-[370px] overflow-hidden overflow-y-auto">
            {data.state === "initial" || !searchQuery ? (
              <div className="flex flex-col  justify-center items-center">
                <Image
                  src="/food.png"
                  alt=""
                  width={390}
                  height={462}
                  className="size-80 mr-2 object-contain"
                />
                <span className="text-2xl text-slate-900 font-bold ">
                  Find your recipe
                </span>
              </div>
            ) : null}
            {data.state === "loading" ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
              </div>
            ) : null}
            {data.state === "error" ? <div>{data.error.message}</div> : null}
            {data.state === "success" && searchQuery ? (
              <div className="flex gap-1 flex-col ">
                {data.data.map((item, index) => (
                  <Link
                    onClick={dialogClose}
                    href={`/search?query=${item.title}`}
                    className={twMerge(
                      "py-1 px-3 line-clamp-1 rounded hover:bg-orange hover:text-white transition-all",
                      index === activeIndex ? "bg-orange text-white" : ""
                    )}
                    key={item.id}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default SearchBox;
