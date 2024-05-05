import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const UnSaveSaveRecipe = () => {
  return (
    <Button title="Un save this recipe" variant="outline" size="icon">
      <Heart className="fill-pink-500 text-pink-500" />
    </Button>
  );
};
export default UnSaveSaveRecipe;
