import prisma from "@/db/db";
import SaveRecipe from "./SaveRecipe";
import UnSaveSaveRecipe from "./UnSaveSaveRecipe";

interface Props {
  recipeId: number;
  userId: string;
}

const FavoriteStatus = async ({ recipeId, userId }: Props) => {
  const recipe = await prisma.favoriteRecipe.findFirst({
    where: {
      recipeId,
      userId,
    },
  });

  return (
    <div className="ml-auto">
      {recipe ? <UnSaveSaveRecipe /> : <SaveRecipe />}
    </div>
  );
};
export default FavoriteStatus;
