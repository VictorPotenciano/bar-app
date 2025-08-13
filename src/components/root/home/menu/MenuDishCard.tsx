import Image from "next/image";
import { Dish } from "../../../../../typing";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type DishCardProps = {
  dish: Dish;
  variant: "left" | "right";
  position: number;
  dishCardVariants: Variants;
  imageVariants: Variants;
};

const MenuDishCard = ({
  dish,
  variant,
  position,
  dishCardVariants,
  imageVariants,
}: DishCardProps) => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <motion.div
      variants={dishCardVariants}
      className={`flex flex-col border border-blue-600 rounded-lg overflow-hidden ${
        variant === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-4`}
    >
      <motion.div
        className="lg:w-1/3 h-40 lg:h-full aspect-square relative group"
        style={{ y: yParallax }}
      >
        <motion.div
          variants={imageVariants}
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <Image
            src={dish.imageUrl ?? "/placeholder.jpg"}
            alt={dish.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 mt-1"
            sizes="(max-width: 1024px) 100vw, 30vw"
          />
        </motion.div>
      </motion.div>

      {/* Contenido del plato */}
      <div className="lg:w-2/3 flex flex-col justify-center p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">{position}</span>
          </div>
          <h3 className="text-xl font-bold text-white">{dish.name}</h3>
        </div>

        <p className="text-sm text-blue-300 mb-3 line-clamp-2">
          {dish.description}
        </p>

        <div className="mb-2">
          <h4 className="text-sm text-blue-400 font-semibold mb-1">
            Ingredientes:
          </h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {dish.ingredients.slice(0, 3).map((ingredient, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs sm:text-sm text-blue-300 border-blue-700 bg-blue-900/20 px-2 sm:px-3 py-0.5"
              >
                {ingredient}
              </Badge>
            ))}
            {dish.ingredients.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs sm:text-sm border-blue-700 bg-blue-900/20 px-2 sm:px-3 py-0.5 text-blue-300"
              >
                +{dish.ingredients.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuDishCard;
