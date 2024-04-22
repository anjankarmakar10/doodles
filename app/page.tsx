import Categories from "@/components/Categories";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import DiscoverRecipes from "@/components/discover-recipes";
import PopularRecipes from "@/components/popular-recipes";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Divider />
      <PopularRecipes />
      <Divider />
      <DiscoverRecipes />
    </main>
  );
}
