"use client";

import CuisineCard from "@/components/CuisineCard";
import { Skeleton } from "@/components/ui/skeleton";
import useSearch from "@/hooks/useCuisines";

interface Params {
  searchParams: {
    query: string;
  };
}

const SearchPage = ({ searchParams }: Params) => {
  const { data, isLoading, isError, error } = useSearch(searchParams.query);

  if (isError) {
    console.log(error);
    return;
  }

  return (
    <section className="max-w-[1036px] mx-auto px-4 py-8">
      <div className="mt-8 gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading ? (
          <>
            {Array(8)
              .fill("")
              .map((_, index) => (
                <div key={index}>
                  <Skeleton className="w-full rounded-2xl h-[208px]" />
                </div>
              ))}
          </>
        ) : (
          <>
            {data?.results?.map((recipe) => (
              <CuisineCard key={recipe.id} recipe={recipe} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};
export default SearchPage;
