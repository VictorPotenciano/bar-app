import { motion } from "framer-motion";
import Image from "next/image";
import { Dish } from "../../../../typing";
import { X } from "lucide-react";

interface DishModalProps {
  selectedDish: Dish;
  closeModal: () => void;
}

const DishModal = ({ selectedDish, closeModal }: DishModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative bg-gray-800 rounded-xl w-full max-w-lg sm:max-w-2xl md:max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
        {/* Contenido del modal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Columna izquierda - Imagen del plato */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src={selectedDish.imageUrl || "/placeholder-dish.jpg"}
              alt={selectedDish.name}
              fill
              className="object-cover rounded-t-xl sm:rounded-t-2xl md:rounded-t-2xl md:rounded-bl-xl"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
              priority
            />
          </div>
          {/* Columna derecha - Detalles del plato */}
          <div className="p-4 md:mt-12">
            {/* Nombre y precio */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedDish.name}
              </h3>
              <span className="text-lg sm:text-xl font-bold text-blue-400 mt-2 sm:mt-0">
                {selectedDish.price.toFixed(2)} €
              </span>
            </div>
            {/* Lista de ingredientes */}
            {selectedDish.ingredients &&
              selectedDish.ingredients.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Ingredientes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDish.ingredients.map((ingredient, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm bg-blue-900/40 text-blue-200 px-2 sm:px-3 py-1 rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            {/* Descripción del plato */}
            <div className="mb-4 sm:mb-6">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Descripción
              </h4>
              <p className="text-blue-200 text-sm sm:text-base">
                {selectedDish.description ||
                  "Delicioso plato preparado con ingredientes frescos."}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DishModal;
