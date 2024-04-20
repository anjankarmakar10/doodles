import Image from "next/image";
import Link from "next/link";

const RecipeCard = () => {
  return (
    <Link
      href="/"
      className="group grid gap-3 origin-center will-change-transform hover:scale-95 transition-all"
    >
      <div className="rounded-2xl h-52 overflow-hidden relative isolate">
        <Image
          src="/pizza.avif"
          className="w-full group-hover:brightness-105 transition-all object-cover "
          width={312}
          height={208}
          alt=""
        />
        <div
          style={{
            background:
              "linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)",
          }}
          className="bg-gradient-to-b  left-0 right-0 bottom-0 z-10 h-20 absolute "
        ></div>
      </div>
      <div>
        <h3 className="text-lg mb-[2px] line-clamp-2 font-bold leading-6 text-slate-800">
          Mushroom Spinach Soup
        </h3>
        <div className="text-base mb-1 font-bold leading-5 text-slate-800">
          Helth Score: <span>100%</span>
        </div>
        <div className="text-base line-clamp-2 leading-5 text-slate-700">
          gluten free, lacto ovo vegetarian, primal
        </div>
      </div>
    </Link>
  );
};
export default RecipeCard;
