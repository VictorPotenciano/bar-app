"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MartiniIcon, ChevronRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Category, Dish } from "../../../../typing";
import { getCategoriesWithDishes } from "@/lib/categoryapi";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { getDish } from "@/lib/dishapi";

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    new Set()
  );
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCategoriesWithProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getCategoriesWithDishes();
        setCategories(data);
        // Expandir la primera categoría por defecto
        setExpandedCategories(new Set([data[0]?.id]));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoriesWithProducts();
  }, []);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleDishClick = async (dishId: number) => {
    try {
      const dishData = await getDish(dishId);
      if (dishData) {
        setSelectedDish(dishData);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error al cargar los detalles del plato:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <SkeletonCategoriesDishes />;
  }

  return (
    <main className="pt-20 pb-5 bg-gray-900 min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Encabezado con título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestra <span className="text-blue-400">Carta</span>
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Descubre nuestra selección de platos preparados con los mejores
            ingredientes y dedicación
          </p>
        </div>

        {categories.length === 0 && (
          <div className="text-center text-blue-200 bg-blue-900/20 p-8 rounded-xl max-w-md mx-auto">
            No hay elementos en el menú disponibles actualmente.
          </div>
        )}

        {/* Listado de categorías */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <button
                onClick={() => toggleCategory(category.id)}
                className="flex items-center w-full group mb-6 cursor-pointer"
              >
                <div className="flex items-center">
                  <Badge className="bg-blue-900/50 text-blue-100 hover:bg-blue-800 mr-4 group-hover:bg-blue-800 transition-colors">
                    <MartiniIcon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Badge>
                  <span className="text-blue-300 text-sm">
                    ({category.dishes.length} platos)
                  </span>
                </div>
                <div className="flex-1 h-px bg-blue-900/50 mx-4 group-hover:bg-blue-700 transition-colors"></div>
                <ChevronRight
                  className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                    expandedCategories.has(category.id) ? "rotate-90" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedCategories.has(category.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {/* Grid de platos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {category.dishes.map((dish) => (
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
                          {/* Contenido de la card (nombre, ingredientes, descripción) */}
                          <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-bold text-white">
                                {dish.name}
                              </h3>
                            </div>
                            {/* Lista de ingredientes */}
                            {dish.ingredients && (
                              <div className="mb-3">
                                <div className="flex flex-wrap gap-1">
                                  {dish.ingredients
                                    .slice(0, 5)
                                    .map((ingredient, i) => (
                                      <span
                                        key={i}
                                        className="text-xs bg-blue-900/40 text-blue-200 px-2 py-1 rounded-full"
                                      >
                                        {ingredient}
                                      </span>
                                    ))}
                                  {dish.ingredients.length > 5 && (
                                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                                      +{dish.ingredients.length - 5}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}

                            <p className="text-blue-200 text-sm mb-4 line-clamp-2">
                              {dish.description ||
                                "Delicioso plato preparado con ingredientes frescos."}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de detalles del plato */}
      <AnimatePresence>
        {isModalOpen && selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto py-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              {/* Contenido del modal en dos columnas (imagen + detalles) */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Columna izquierda - Imagen del plato */}
                <div className="relative h-80 md:h-full">
                  <Image
                    src={selectedDish.imageUrl || "/placeholder-dish.jpg"}
                    alt={selectedDish.name}
                    fill
                    className="object-cover rounded-tl-xl rounded-bl-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Columna derecha - Detalles del plato */}
                <div className="p-8">
                  {/* Nombre y precio */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {selectedDish.name}
                    </h3>
                    <span className="text-xl font-bold text-blue-400">
                      {selectedDish.price.toFixed(2)} €
                    </span>
                  </div>
                  {/* Lista de ingredientes */}
                  {selectedDish.ingredients &&
                    selectedDish.ingredients.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Ingredientes
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedDish.ingredients.map((ingredient, i) => (
                            <span
                              key={i}
                              className="text-sm bg-blue-900/40 text-blue-200 px-3 py-1 rounded-full"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  {/* Descripción del plato */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Descripción
                    </h4>
                    <p className="text-blue-200">
                      {selectedDish.description ||
                        "Delicioso plato preparado con ingredientes frescos."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

const SkeletonCategoriesDishes = () => {
  return (
    <main className="py-20 bg-gray-900 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-1/3 bg-gray-700 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 bg-gray-600 mx-auto" />
        </div>
        <div className="space-y-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="mb-12">
              <div className="flex items-center w-full mb-6">
                <Skeleton className="h-8 w-1/4 bg-blue-900/50 mr-4" />
                <Skeleton className="h-4 w-16 bg-gray-600" />
                <div className="flex-1 h-px bg-blue-900/50 mx-4"></div>
                <Skeleton className="h-5 w-5 bg-gray-700" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[...Array(4)].map((_, j) => (
                  <div
                    key={j}
                    className="bg-[#1e293b] rounded-xl overflow-hidden border border-blue-900/30"
                  >
                    <Skeleton className="h-60 w-full bg-gray-700" />
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <Skeleton className="h-6 w-3/4 bg-gray-600" />
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {[...Array(3)].map((_, k) => (
                          <Skeleton
                            key={k}
                            className="h-5 w-16 bg-blue-900/40 rounded-full"
                          />
                        ))}
                      </div>
                      <Skeleton className="h-4 w-full bg-gray-600 mb-2" />
                      <Skeleton className="h-4 w-2/3 bg-gray-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
