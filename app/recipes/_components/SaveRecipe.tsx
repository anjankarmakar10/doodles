import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const SaveRecipe = () => {
  return (
    <Button title="Save this recipe" variant="outline" size="icon">
      <Heart />
    </Button>
  );
};
export default SaveRecipe;
