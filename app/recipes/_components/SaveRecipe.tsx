import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const SaveRecipe = () => {
  return (
    <Button variant="outline" size="icon">
      <Heart className="fill-pink-500 text-pink-500" />
    </Button>
  );
};
export default SaveRecipe;
