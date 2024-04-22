"use client";

import useCuisines from "@/hooks/useCuisines";
import CuisinesHeader from "./_components/cuisines-header";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import CuisineCard from "@/components/CuisineCard";

const CuisinesPage = () => {
  const searchParams = useSearchParams();
  const country = searchParams.get("country");

  const { data, isLoading, isError, error } = useCuisines(country || "indian");

  if (!data?.results) {
    return (
      <div className="max-w-[1036px] mx-auto px-4 text-lg py-8  font-bold text-slate-800">
        Your daily points limit of 150 has been reached. Please upgrade your
        plan to continue using the API.
      </div>
    );
  }

  if (isError) {
    console.log(error);
    return;
  }

  return (
    <section className="max-w-[1036px] mx-auto px-4 py-8">
      <CuisinesHeader />
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
export default CuisinesPage;
