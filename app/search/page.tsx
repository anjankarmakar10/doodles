"use client";

import CuisineCard from "@/components/CuisineCard";
import { Skeleton } from "@/components/ui/skeleton";
import useSearch from "@/hooks/useCuisines";
import Image from "next/image";

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

  if (data?.results.length === 0)
    return (
      <section
        style={{
          height: "calc(100vh - 80px",
        }}
        className="max-w-[1036px] mx-auto px-4 py-8 flex flex-col justify-center items-center gap-10"
      >
        <Image
          width={238}
          height={238}
          alt="search not found"
          src={"/location_unserviceable.avif"}
        />
        <h5 className="text-2xl text-slate-800 font-bold">
          ☹ No Recipes Results Found!
        </h5>
      </section>
    );

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
