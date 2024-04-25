import { API_KEY, BASE_URL } from "@/lib/constants";
import { RecipeDetails } from "@/lib/types";
import Image from "next/image";
import { cache } from "react";

const getRecipeInformation = cache((id: string): Promise<RecipeDetails> => {
  return fetch(
    `${BASE_URL}/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`
  ).then((res) => res.json());
});

interface Params {
  params: {
    id: string;
  };
}

const RecipeDetails = async ({ params }: Params) => {
  const recipe = await getRecipeInformation(params.id);

  return (
    <section className="max-w-[1036px] mx-auto px-4 py-8">
      <div className="">
        <h1 className="text-2xl font-bold mb-4 ">{recipe.title}</h1>

        <div className="flex flex-col gap-2">
          <div className="flex-1">
            <Image
              width={600}
              height={600}
              className="w-full"
              src={recipe.image}
              alt={recipe.title}
            />
          </div>
          <div className="flex-1">
            <div
              className="prose mx-auto lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            ></div>
            <div className="flex py-2 justify-evenly flex-wrap">
              <div className=" flex flex-col  bg-white  w-fit p-4 items-center justify-center gap-1">
                <Image
                  width={500}
                  height={500}
                  src={`https://spoonacular.com/application/frontend/images/badges/cheap.svg`}
                  className="rounded-xl object-cover h-10 w-10"
                  alt=""
                />
                <p className="text-sm mb-2 font-medium ">
                  ${(recipe.pricePerServing / 100).toFixed(2)} per serving
                </p>
              </div>

              <div className=" flex flex-col  bg-white  w-fit p-4 items-center justify-center gap-1">
                <Image
                  width={500}
                  height={500}
                  src={`https://spoonacular.com/application/frontend/images/badges/fast.svg`}
                  className="rounded-xl object-cover h-10 w-10"
                  alt=""
                />
                <p className="text-sm mb-2 font-medium ">
                  Ready in {recipe.readyInMinutes} minutes
                </p>
              </div>

              <div className=" flex flex-col  bg-white  w-fit p-4 items-center justify-center gap-1">
                <Image
                  width={500}
                  height={500}
                  src={`https://spoonacular.com/application/frontend/images/badges/popular.svg`}
                  className="rounded-xl object-cover h-10 w-10"
                  alt=""
                />
                <p className="text-sm mb-2 font-medium ">
                  {recipe.aggregateLikes} likes
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2 mt-4">Ingredients</h2>
        <ul className="mb-4 flex flex-wrap items-center justify-center ">
          {recipe.extendedIngredients?.map((ingredient, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden flex flex-col  bg-white cursor-pointer max-w-[200px]"
            >
              <div className="p-2 ">
                <Image
                  width={500}
                  height={500}
                  src={`https://spoonacular.com/cdn/ingredients_250x250/${ingredient.image}`}
                  className="rounded-xl object-cover w-full h-full"
                  alt=""
                />
              </div>

              <div className=" pl-3 p-3 text-text1 flex flex-col justify-center">
                <p className="text-sm mb-2 font-medium text-center">
                  {ingredient.original}
                </p>
              </div>
            </div>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ul className="bg-gray-100 mb-6">
          {recipe?.analyzedInstructions[0].steps.map((instruction, index) => (
            <li key={index} className=" rounded flex p-4  h-full items-center">
              <span className="text-indigo-500 font-bold w-6 h-6 flex-shrink-0 mr-4">
                {instruction.number}
              </span>
              <span className="font-medium">{instruction.step}</span>
            </li>
          ))}
        </ul>

        <h5 className="text-2xl md:text-3xl pl-3 my-2 border-l-4  font-sans font-bold border-teal-400  text-gray-700">
          Serve the recipe with your favorite frosting or enjoy it plain!
        </h5>
      </div>
    </section>
  );
};
export default RecipeDetails;
