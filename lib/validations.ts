import z from "zod";

export const favoriteRecipe = z.object({
  recipeId: z.number(),
  userId: z.string(),
  image: z.string().optional(),
  title: z.string(),
});
