"use client";

import useCuisines from "@/hooks/useCuisines";
import CuisinesHeader from "./_components/cuisines-header";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
const CuisinesPage = () => {
  const searchParams = useSearchParams();
  const country = searchParams.get("country");

  const { data, isLoading, isError, error } = useCuisines(country || "indian");

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
              <Link
                href={"/"}
                key={recipe.id}
                className="rounded-2xl group h-52 overflow-hidden relative isolate"
              >
                <Image
                  src={recipe?.image}
                  loading="lazy"
                  className="w-full will-change-transform h-[208px] md:group-hover:scale-105 md:blur-[1px] group-hover:brightness-110 md:group-hover:blur-0 transition-all object-cover duration-300 "
                  width={312}
                  height={208}
                  alt=""
                />
                <div
                  style={{
                    background:
                      "linear-gradient(rgba(27, 30, 36, 0) 0%, rgba(27, 30, 36,1) 90%)",
                  }}
                  className="bg-gradient-to-b  object-cover left-0 right-0 bottom-0 px-2 pb-2 flex items-end z-10 h-20 absolute "
                >
                  <h4 className="text-base leading-5  font-medium text-white line-clamp-2">
                    {recipe.title}
                  </h4>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </section>
  );
};
export default CuisinesPage;
