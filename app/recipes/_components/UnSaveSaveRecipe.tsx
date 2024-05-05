import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const UnSaveSaveRecipe = () => {
  return (
    <Button
      title="Remove this recipe from favorite "
      variant="outline"
      size="icon"
    >
      <Heart className="fill-pink-500 text-pink-500" />
    </Button>
  );
};
export default UnSaveSaveRecipe;
