"use client";

import useRandomRecipes from "@/hooks/useRandomRecipes";
import RecipeCard from "./RecipeCard";
import { Skeleton } from "./ui/skeleton";

const DiscoverRecipes = () => {
  const { data, isLoading, isError, error } = useRandomRecipes();

  if (isError) {
    console.log(error);
    return;
  }

  return (
    <section className="max-w-[1036px] mx-auto px-4  pb-10">
      <header className="flex items-center justify-between ">
        <h2 className="font-bold text-xl sm:text-2xl">Discover recipes</h2>
      </header>
      <div className="mt-5 gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading ? (
          <>
            {Array(8)
              .fill("")
              .map((_, index) => (
                <div key={index}>
                  <Skeleton className="w-full mb-3 rounded-2xl h-[208px]" />
                  <Skeleton className="w-full mb-2  h-[20px]" />
                  <Skeleton className="w-full  h-[16px] mb-1" />
                  <Skeleton className="w-full  h-[12px]" />
                </div>
              ))}
          </>
        ) : (
          <>
            {data?.recipes?.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};
export default DiscoverRecipes;
