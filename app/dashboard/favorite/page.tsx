import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import EmptyFavorite from "./_components/EmptyFavorite";
import prisma from "@/db/db";
import { currentUser } from "@clerk/nextjs/server";
import FavoriteRecipeCard from "@/components/FavoriteRecipeCard";

const FavoritePage = async () => {
  const user = await currentUser();
  const recipes = await prisma.favoriteRecipe.findMany({
    where: {
      userId: user?.id,
    },
  });

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
          {recipes.length === 0 ? (
            <EmptyFavorite />
          ) : (
            <div>
              <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {recipes.map((recipe) => (
                  <FavoriteRecipeCard {...recipe} key={recipe.id} />
                ))}
              </div>
            </div>
          )}
        </ScrollArea>
      </section>
    </div>
  );
};
export default FavoritePage;
