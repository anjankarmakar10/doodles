/*
  Warnings:

  - Changed the type of `recipeId` on the `FavoriteRecipe` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "FavoriteRecipe" DROP COLUMN "recipeId",
ADD COLUMN     "recipeId" INTEGER NOT NULL;
