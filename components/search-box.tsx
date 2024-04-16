import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NavItemLabel } from "./hader";
import { Input } from "@/components/ui/input";
const SearchBox = () => {
  return (
    <Dialog>
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
        <form action="">
          <DialogHeader>
            <DialogTitle>
              <div className="pt-4">
                <Input
                  className="font-normal focus-visible:ring-2 focus-visible:ring-orange"
                  type="search"
                  placeholder="Search recipe..."
                />
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="pt-10"></div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default SearchBox;
