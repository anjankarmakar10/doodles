import { API_KEY, BASE_URL } from "@/lib/constants";
import { Recipe } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

interface QueryResponse {
  recipes: Recipe[];
}

const usePopularRecipes = () => {
  const getData = () => {
    return fetch(
      `${BASE_URL}/recipes/random?number=10&tags=vegetarian,chicken&apiKey=${API_KEY}`
    ).then((res) => res.json());
  };

  const { data, isError, isLoading } = useQuery<QueryResponse>({
    queryKey: ["recipes"],
    queryFn: getData,
  });

  const recipes = data?.recipes?.filter((recipe) => recipe.veryHealthy);

  return { recipes, isError, isLoading };
};
export default usePopularRecipes;
