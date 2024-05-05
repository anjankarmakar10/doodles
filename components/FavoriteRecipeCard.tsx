import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FavoriteRecipe } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const FavoriteRecipeCard = ({ title, id, image }: FavoriteRecipe) => {
  return (
    <Card className="w-full rounded-md">
      <CardContent className="p-0 px-2 pt-2 pb-3 flex flex-col gap-2">
        <Image
          src={image || ""}
          alt={title}
          width={320}
          height={320}
          className="w-full rounded-md h-auto object-cover"
        />
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardContent>
      <CardFooter className="grid p-0 px-2 pb-2 grid-cols-2 gap-2">
        <Link
          href={"/"}
          className={buttonVariants({ size: "sm", variant: "outline" })}
        >
          View
        </Link>
        <Button size="sm" variant="destructive">
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};
export default FavoriteRecipeCard;
