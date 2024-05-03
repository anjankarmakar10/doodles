import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import EmptyFavorite from "./_components/EmptyFavorite";

const FavoritePage = () => {
  return (
    <div>
      <section className="grid items-center gap-8 pb-8 pt-6 md:py-8 overflow-hidden">
        <PageHeader>
          <PageHeaderHeading size="sm">Favorite</PageHeaderHeading>
          <PageHeaderDescription size="sm">
            Manage your favorite recipes
          </PageHeaderDescription>
        </PageHeader>
        <ScrollArea className="w-full pb-3.5">
          <EmptyFavorite />
        </ScrollArea>
      </section>
    </div>
  );
};
export default FavoritePage;
