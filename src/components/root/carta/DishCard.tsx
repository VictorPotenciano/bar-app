import { motion } from "framer-motion";
import Image from "next/image";
import { Dish } from "../../../../typing";

interface DishCardProps {
  dish: Dish;
  handleDishClick: (dishId: number) => void;
}

const DishCard = ({ dish, handleDishClick }: DishCardProps) => {
  return (
    <motion.div
      layout
      key={dish.id}
      onClick={() => handleDishClick(dish.id)}
      className="bg-[#1e293b] rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 group cursor-pointer"
      whileHover={{ y: -5 }}
    >
      {/* Imagen del plato */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={dish.imageUrl || "/placeholder-dish.jpg"}
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
        {/* Precio del plato */}
        <div className="absolute bottom-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {dish.price.toFixed(2)} €
        </div>
      </div>
      {/* Contenido de la card (nombre, descripción) */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{dish.name}</h3>
        </div>
        <p className="text-blue-200 text-sm mb-4 line-clamp-2">
          {dish.description ||
            "Delicioso plato preparado con ingredientes frescos."}
        </p>
      </div>
    </motion.div>
  );
};

export default DishCard;
