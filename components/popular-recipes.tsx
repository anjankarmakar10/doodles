"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RecipeCard from "./RecipeCard";
import usePopularRecipes from "@/hooks/usePopularRecipes";
const PopularRecipes = () => {
  const { recipes, isError, isLoading } = usePopularRecipes();

  return (
    <section className="max-w-[1036px] mx-auto px-4  pb-10">
      <Carousel
        opts={{
          align: "center",
          dragFree: true,
        }}
      >
        <header className="flex items-center justify-between ">
          <h2 className="font-bold text-2xl">Top Recipe in Bangalore</h2>
          <div className="flex items-center relative gap-2">
            <CarouselPrevious className="absolute -translate-x-8 right-0" />
            <CarouselNext className="absolute right-0" />
          </div>
        </header>
        <div className="mt-5">
          <CarouselContent className="px-4 gap-8">
            <CarouselItem className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3 ">
              <RecipeCard />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3 ">
              <RecipeCard />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3 ">
              <RecipeCard />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3 ">
              <RecipeCard />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3 ">
              <RecipeCard />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3 ">
              <RecipeCard />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};
export default PopularRecipes;
